package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
)

type Product struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	Image       string  `json:"image"`
}

type Credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

var admin = Credentials{
	Username: "admin",
	Password: "--force",
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	//CRORS
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	w.Header().Set("Access-Control-Allow-Headers", "Content-type")

	if r.Method == http.MethodOptions {
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	var creds Credentials
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	if strings.TrimSpace(creds.Username) == admin.Username && strings.TrimSpace(creds.Password) == admin.Password {
		json.NewEncoder(w).Encode(map[string]string{"message": "Login successful!"})
	} else {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
	}
}

func main() {
	// This sets up a route (URL path) at "/api/hello"
	http.HandleFunc("/products", func(w http.ResponseWriter, r *http.Request) {
		// This tells the browser that we are sending JSON data
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-type")
		w.Header().Set("Content-Type", "application/json")

		//Adding products to list
		products := addProducts()

		// This sends back a JSON response to the client
		json.NewEncoder(w).Encode(products)
	})

	http.HandleFunc("/login", LoginHandler)

	// Print a message to the terminal so we know it's running
	fmt.Println("✅ Server is running at http://localhost:8080")

	// Start the server on port 8080
	log.Fatal(http.ListenAndServe(":8080", nil))
}
