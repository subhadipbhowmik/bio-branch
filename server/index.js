const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { dashboardData } = require('./controllers/dashboard');
const { registerUser,loginUser, loginUserWithGoogle } = require('./controllers/auth');
const { getUserData } = require('./controllers/getUserData');
const { saveSocials, saveProfile } = require('./controllers/saveSocials');
const { loadSocials } = require('./controllers/loadSocials');
const { loadLinks } = require('./controllers/loadLinks');
const { saveLinks } = require('./controllers/saveLinks');

// middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });


//initialized Firebase Admin SDK 
const admin = require('firebase-admin');
const serviceAccount = require('your-service-account-key');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

console.log("Firebase Admin SDK initialized successfully");



// Home Route
app.get('/', (req, res) => {
    res.send('Bio Branch Is Running');
});

// Register route -> to create a new user
app.post('/api/register', registerUser);

// Login route -> to login user
app.post('/api/login', loginUser);
app.post('/api/google-login', loginUserWithGoogle);

// Dashboard route
app.post('/data/dashboard', dashboardData);

// dynamic routing for handles
app.get('/get/:handle', getUserData)

// users social links data
// app.get('/get/socials/:handle', getUserSocials)

app.post('/save/socials', saveSocials)
app.post('/save/profile/', saveProfile)
app.post('/save/links/', saveLinks)

app.post('/load/socials', loadSocials)
app.post('/load/links', loadLinks)

// Use the port from environment variables or default to 4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
