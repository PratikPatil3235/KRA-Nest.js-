# 📚 Book Management System – NestJS

A simple Book Management REST API built using [NestJS](https://nestjs.com/). This project demonstrates a modular structure with controllers, services, and modules in a clean and maintainable format.

---

## 🚀 Features

- Create, read, update, and delete (CRUD) books
- Modular architecture (Controller, Service, Module,middleware)
- In-memory data storage (for demonstration)
- RESTful API structure
- before updateing any request every request which has book as their starting point api it will be logged in logger file
- for checking how many requests have been made and to check on which date they have been made 

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/PratikPatil3235/KRA-Nest.js-.git

# Navigate into the project directory
cd KRA-Nest.js-/day-1

### Install dependencies
npm install
▶️ Running the App
bash
Copy
Edit
# Start the development server
npm run start
The server will be running at: http://localhost:3000

##📬 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
POST	/books	Add a new book
PUT	/books/:id	Update book by ID
DELETE	/books/delete/:id	Delete book by ID

##Use tools like Postman or cURL to test endpoints.

##🧪 Example Book Object
json
Copy
Edit
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}

```
---

### 📦 Technologies Used
-NestJS

-Node.js

-TypeScript

