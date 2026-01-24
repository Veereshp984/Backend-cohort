
# Day 3 - REST API Notes Practice

This repository contains my **Day 3 backend class practice**.

Today I learned about **REST APIs** and their different methods.  
I also created a simple mini task where I can **create notes using POST request** and **view all notes using GET request**.

## What I Learned
- What a **REST API** is
- REST API methods:
  - **GET** (to fetch data)
  - **POST** (to send/create data)
- How to create routes using Express:
  - `app.get()`
  - `app.post()`
- How to use middleware:
  - `app.use()`
  - `express.json()` to read JSON data received in `req.body`

## Mini Task: Notes API
### 1) Create a Note (POST)
- Endpoint: `POST /notes`
- Sends a note with **title** and **description**
- The note is stored in an array

Example JSON body:
```json
{
  "title": "My Note",
  "description": "This is my first note"
}
````

### 2) Get All Notes (GET)

* Endpoint: `GET /notes`
* Returns all notes that were created using the POST request

## How to Run

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

