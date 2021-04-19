package main

import (
	"fmt"
	"log"
)

// Flop is a test method, it returns a string to check that server is working correctly
func (p *Player) Flop() String {
	return "i am wanted for war crimes in uganda"
}

// Echo is an another test method, it adds 1 to the input and returns it
func (p *Player) Echo(i Int) Int {
	return i + 1
}

// AddStudent creates a new student account with empty password.
func (p *Player) AddStudent(name String) StudentID {
	query := `insert into logins (id, hash, names, role) values ($1, $2, $3, 1)`
	uid, err := maxid(`logins`)
	sid := StudentID(uid + 1)
	_, err = dbconn.Exec(query, sid, sesh(""), name)
	if err != nil {
		log.Print(err)
	}
	return sid
}

// ZapStudent removes a student from database along with its data
func (p *Player) ZapStudent(u StudentID) {
	// TODO zap data
	qlogin := `delete from logins where id = $1`
	qapp := `delete from appointments where sid = $1`
	_, err := dbconn.Exec(qlogin, u)
	if err != nil {
		log.Print(err)
	}
	_, err = dbconn.Exec(qapp, u)
	if err != nil {
		log.Print(err)
	}
}

// GetStudents returns a list of all students
func (p *Player) GetStudents() MapStudentIDString {
	query := `select (id, names) from logins`
	rows, err := dbconn.Query(query)
	if err != nil {
		log.Print(err)
		return nil
	}
	m := make(MapStudentIDString)
	for rows.Next() {
		var uid StudentID
		var names string
		rows.Scan(&uid, &names)
		m[uid] = names
	}
	return m
}

func (p *Player) NewTask(tk Task, thid TheoryID) TaskID {
	taid, err := maxid(`tasks`)
	if err != nil {
		log.Println(err)
		return -1
	}
	return p.RenewTask(TaskID(taid), tk, thid)
}

func (p *Player) RenewTask(taid TaskID, tk Task, thid TheoryID) TaskID {
	err := tes.WriteTask(&tk, taid, thid)
	if err != nil {
		log.Println(err)
		return -1
	}
	return taid
}

func (p *Player) ZapTask(tid TaskID) {
	var err error
	query := `delete from tasks where id = $1`
	_, err = dbconn.Exec(query, tid)
	if err != nil {
		log.Print(err)
	}
}

func (p *Player) NewTheory(th Theory) TheoryID {
	uid, err := maxid(`theory`)
	tid := TheoryID(uid + 1)
	if err != nil {
		log.Println(err)
		return -1
	}
	return p.RenewTheory(tid, th)
}

func (p *Player) RenewTheory(thid TheoryID, th Theory) TheoryID {
	bts, err := theory2gob(&th)
	query := `insert into theory (id, data) values ($1, $2)`
	_, err = dbconn.Exec(query, thid, bts)
	if err != nil {
		log.Println(err)
		return -1
	}
	return thid
}

func (p *Player) ZapTheory(thid TheoryID) {
	query := `delete from theory where id = $1`
	_, err := dbconn.Exec(query, thid)
	if err != nil {
		log.Print(err)
	}
}

func (p *Player) Appoint(sida StudentIDArray, tida TaskIDArray) {
	query := `insert into appointments (sid, taskids, complete, correct)`
	for _, sid := range sida {
		_, err := dbconn.Exec(query, sid, tida, false, nil)
		if err != nil {
			log.Println(err)
			return
		}
	}
}

func (p *Player) GetStats(StudentID) *Stats {
	query := `select from appointments where sid = $1 and complete = true`
	rows, err := dbconn.Query(query)
	if err != nil {
		log.Println(err)
		return nil
	}
	// if there's going to be more levels fix it
	total := make([]uint, 3)
	correct := make([]uint, 3)
	var totaltries uint = 0
	for rows.Next() {
		// WILL be ineffective on large scale
		var r bool
		var tid int32
		var tries int32
		//appointments (sid integer, taskid integer, complete boolean, correct boolean, tries integer)
		rows.Scan(nil, &tid, nil, &r, &tries)
		var compx uint
		{
			query := `select from tasks where taskid = $1`
			sub := dbconn.QueryRow(query, tid)
			buf := make([]byte, 0, 255)
			err = sub.Scan(buf)
			if err != nil {
				fmt.Println(err)
				return nil
			}
			tk, err := gob2task(buf)
			if err != nil {
				fmt.Println(err)
				return nil
			}
			compx = tk.Difficulty
		}
		// see util.go:65
		{
			if r {
				correct[compx-1]++
			}
			total[compx-1]++
			totaltries += uint(tries)
		}
	}
	return &Stats{Total: total, Correct: correct, TotalAttempts: totaltries}
}

//*/
