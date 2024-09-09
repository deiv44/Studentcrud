const express = require('express')
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentroutes.js");
const Student = require("./model/student.model.js");
const app = express()

//middleware to use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/students", studentRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});


mongoose.connect("mongodb+srv://kedeleonesup:eTlY02cGZebg9Gv5@backenddb.sogkd.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("App listening on port 3000!");
});
})
.catch(() => {
    console.log("Connection failed");
});



import http from 'http';
 
// Create a server object
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Write some text to the response
    res.end('Welcome to my simple Node.js app!');
});
 
// Define the port to listen on
const port = 3000;
 
// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});