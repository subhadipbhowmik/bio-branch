const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5173;
require('dotenv').config();
const { dashboardData } = require('./controllers/dashboard');
const { registerUser, loginUser } = require('./controllers/auth');
const { getUserData } = require('./controllers/getuserdata');
const { saveSocials } = require('./controllers/saveSocials');

// middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/biotree')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

// Home Route
app.get('/', (req, res) => {
    res.send('register');
});

// Register route -> to create a new user
app.post('/api/register', registerUser);

// Login route -> to login user
app.post('/api/login', loginUser);

// Dashboard route
app.post('/data/dashboard', dashboardData);

// dynamic routing for handles
app.get('/get/:handle', getUserData)

// users social links data
// app.get('/get/socials/:handle', getUserSocials)

app.post('/save/socials', saveSocials)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
