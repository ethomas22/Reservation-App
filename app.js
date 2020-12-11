const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080; // Default to 8080
const app = express();

// Base page
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});

// Assets (such as css and js)
app.get(/\/assets\/.+/i, function(request, response) {
    response.sendFile(path.join(__dirname, request.path));
});

// Here we go
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
