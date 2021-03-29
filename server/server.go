package main

import (
	"crypto/sha512"
	"log"
)

// Flop is a test method, it returns a string to check that server is working correctly
func (p *Player) Flop() String {
	return "i'am wanted for war crimes in uganda"
}

// Echo is an another test method, it adds 1 to the input and returns it
func (p *Player) Echo(i Int) Int {
	return i + 1
}

// StLogout is a deauth method
func (p *Player) StLogout() {
	ts.RejectToken(p.Token)
}

func (p *Player) StGetTest(id TestID) TaskIDArray {
	a, ok := tes.Given[p.UserID]
	if !ok {
		return nil
	}
	found := false
	for _, e := range a {
		found = e == id
	}
	if !found {
		return nil
	}
	_, tia := tes.Manipulate(id, nil)
	return tia
}

func (p *Player) StGetTask(id TaskID) Task {
	return *tes.ReadTask(id)
}

func maxid() (u UserID, err error) {
	row := dbconn.QueryRow(`select max(id) from logins`)
	err = row.Scan(&u)
	if err != nil {
		return 0, err
	}
	return
}

func sesh(passw string) int32 {
	var hasher = sha512.New()
	hashs := hasher.Sum([]byte(passw))
	hash := int32(hashs[1]) |
		int32(hashs[2])<<8 |
		int32(hashs[3])<<16 |
		int32(hashs[4])<<24
	return hash
}

// NewStudent creates a new student account with empty password
func (p *Player) NewStudent(name String, uid UserID) {
	query := `insert into logins (id, hash, names, role) values ($1, $2, $3, 1)`
	_, err := dbconn.Exec(query, uid+1, sesh(""), name)
	if err != nil {
		log.Print(err)
	}
}

func (p *Player) NewTest(tasks TaskIDArray, name String) TestID {
	tid := tes.Compose(tasks)
	_, err := dbconn.Exec(`insert into tests (id, name) values $1, $2`, tid, name)
	if err != nil {
		log.Print(err)
	}
	return tid
}

func (p *Player) TestPool() MapTestIDTaskIDArray {
	return tes.Tests
}

//*/
