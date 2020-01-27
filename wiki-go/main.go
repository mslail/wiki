package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

// Initing Server
type server struct{}

// Initing Map
var m map[string]string

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	body, _ := ioutil.ReadAll(r.Body)
	name := strings.TrimPrefix(r.URL.Path, "/articles/")
	// Cors and Content Type
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	// Checking for Method Type
	switch r.Method {
	case "GET":
		// Checking if name exists
		if name == "" {
			w.WriteHeader(http.StatusOK)
			// All articles
			json.NewEncoder(w).Encode(m)
		} else {
			// Creating article in JSON format
			out := "{%s: %s}"
			value, prs := m[name]
			article := fmt.Sprintf(out, name, value)
			if prs == true {
				w.WriteHeader(http.StatusOK)
				// One article
				json.NewEncoder(w).Encode(article)
			} else {
				// Not Found
				w.WriteHeader(http.StatusNotFound)
			}

		}
	case "PUT":
		article := m[name]
		description := string(body)
		// Saving Description
		m[name] = description
		// Checking if article exists
		if article == "" {
			w.WriteHeader(http.StatusOK)
		} else {
			w.WriteHeader(http.StatusCreated)
		}
	}
}

func main() {
	m = make(map[string]string)
	// Initing Server
	s := &server{}
	PORT := "9090"
	// URLs
	http.Handle("/articles/", s)
	fmt.Println("Server has successfully started on port: " + PORT)
	// Logs
	log.Fatal(http.ListenAndServe(":"+PORT, nil))
}
