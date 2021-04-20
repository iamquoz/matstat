package main

import (
	"fmt"
	"log"
)

// StLogout is a deauth method
func (p *Player) StLogout() {
	ts.RejectToken(p.Token)
}

// StGetTask returns a task by id. Any user can get any task, this is
// not intentional. Probably needs to be fixed.
func (p *Player) StGetTask(id TaskID) *Task {
	v, err := readtask(id)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return v
}

// StRegister changes password for a user
func (p *Player) StRegister(new String) {
	query := `update logins set hash = $1 where id = $2`
	_, err := dbconn.Exec(query, sesh(string(new)), p.StudentID)
	if err != nil {
		log.Print(err)
	}
}

// StGetTheory loads theory data by ID
func (p *Player) StGetTheory(tid TheoryID) *Theory {
	row := dbconn.QueryRow(`select from theory where id = $1`)
	theory := new(Theory)
	err := row.Scan(theory)
	if err != nil {
		log.Print(err)
		return nil
	}
	return theory
}

// StSelfStats returns stats for the student himself
func (p *Player) StSelfStats() MapTheoryIDStats {
	return p.GetStats(p.StudentID)
}
