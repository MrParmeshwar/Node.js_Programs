//This is An Example OF Express Router (express.router).
//This is a middleware Logic.

const express = require('express');
const router = express.Router(); // Use express.Router() to create a router
const cors = require('cors');

router.use(express.json());
router.use(cors());

// Middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// Define the about route.
router.get('/', (req, res) => {
    res.send("Information about Company.");
});

module.exports = router;
