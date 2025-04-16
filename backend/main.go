package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Product struct{
	ID       string     `json:"id"`
	Name     string  `json:"name"`
	Description string `json:"description"`
    Price    float64 `json:"price"`
    Image string  `json:"image"`
}

func main() {
    // This sets up a route (URL path) at "/api/hello"
    http.HandleFunc("/products", func(w http.ResponseWriter, r *http.Request) {
        // This tells the browser that we are sending JSON data
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Headers", "Content-type")
        w.Header().Set("Content-Type", "application/json")

		//Adding products to list
		products := addProducts()

        // This sends back a JSON response to the client
        json.NewEncoder(w).Encode(products)
    })

    // Print a message to the terminal so we know it's running
    fmt.Println("✅ Server is running at http://localhost:8080")

    // Start the server on port 8080
    log.Fatal(http.ListenAndServe(":8080", nil))
}

