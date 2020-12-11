const express = require("express");
const path = require("path");
const Reservation = require("./lib/Reservation");

const PORT = process.env.PORT || 8080; // Default to 8080
const app = express();

app.use(express.urlencoded({ extended: true }));

var reservations = [];

// Base page
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(request, response) {
    response.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(request, response) {
    response.sendFile(path.join(__dirname, "reservation.html"));
});

// Assets (such as css and js)
app.get(/\/assets\/.+/i, function(request, response) {
    response.sendFile(path.join(__dirname, request.path));
});

// API
app.get("/tables/list", function(request, response) {
    response.end(reservations);
});

app.post("/reserve/new", function(request, response) {
    request.accepts("json");
    let data = request.body;
    reservations.push(new Reservation(data.name, data.phone, data.email, getUniqueId()));
    console.log(reservations);
});

// Here we go
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});

function getUniqueId() {
    let id;
    do {
        id = Math.floor(Math.random() * 1000);
    } while (reservations.some(reserve => reserve.getId() == id));
    return id;
}
