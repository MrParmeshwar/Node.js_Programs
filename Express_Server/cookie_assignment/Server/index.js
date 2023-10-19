//This is An Server For Cookies Assignment 

const express = require('express');
const app = express()
const session = require('express-session')
const cookie = require('cookie-parser')
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(cookie());

// Middleware For Our Code 
app.use(
    session({
        secret: "hjdfjioejgklahrahfhksfweropewkmwej",
        saveUninitialized: true,
        resave: false
    })
)

// Create an array to store inside newly added movies
const newlyAddedMovies = [];

app.post('/movie', (req, res) => {
    // Add the movie to the newlyAddedMovies array
    const movie = req.body.Movies[0];
    newlyAddedMovies.push(movie);
    
    res.json({ message: 'Movie Uploaded Successfully..!' });
    console.log(req.body);
    console.log("Server Recieves Your Data Successfully..!");
});

app.get('/newlyAddedMovies', (req, res) => {
    // Return the array of newly added movies
    res.json({ movies: newlyAddedMovies });
});


let PORT = 3002
app.listen(PORT, () => {
    console.log(`Server Started On Port No. ${PORT}`);
});
