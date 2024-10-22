const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();
require('./auth'); // Import the Google OAuth configuration

const { dashboardData } = require('./controllers/dashboard');
const { registerUser, loginUser } = require('./controllers/auth');
const { getUserData } = require('./controllers/getUserData');
const { saveSocials, saveProfile } = require('./controllers/saveSocials');
const { loadSocials } = require('./controllers/loadSocials');
const { loadLinks } = require('./controllers/loadLinks');
const { saveLinks } = require('./controllers/saveLinks');
const { verifyJWT } = require('./middlewares/auth.middleware');

const app = express();

// Middlewares
// Enable CORS for your frontend URL
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Middleware for sessions (required for Passport.js)
app.use(require('express-session')({
    secret: 'your_secret_key', // Replace with a secure secret
    resave: false,
    saveUninitialized: true
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

// Home Route
app.get('/', (req, res) => {
    res.send('Bio Branch Is Running');
});

// Register route -> to create a new user
app.post('/api/register', registerUser);

// Login route -> to login user
app.post('/api/login', loginUser);

// Dashboard route
app.post('/data/dashboard', dashboardData);

// Dynamic routing for handles
app.get('/get/:handle', getUserData);

// User's social links data
app.post('/save/socials', saveSocials);
app.post('/save/profile/', saveProfile);
app.post('/save/links/', saveLinks);

app.post('/load/socials', loadSocials);
app.post('/load/links', loadLinks);

// Google OAuth Routes
// Route to start Google OAuth
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Route to handle Google OAuth callback
app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/', // Replace with your redirect URI to home
        failureRedirect: '/login' // Replace with your failure URI
    })
);

// Add a logout route
app.get('/logout', verifyJWT,(req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// Use the port from environment variables or default to 4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
