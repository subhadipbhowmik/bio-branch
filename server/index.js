import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
import dashboardData from './controllers/dashboard.js';
import { registerUser, loginUser } from './controllers/auth.js';
import getUserData from './controllers/getUserData.js';
import { saveSocials, saveProfile } from './controllers/saveSocials.js';
import loadSocials from './controllers/loadSocials.js';
import loadLinks from './controllers/loadLinks.js';
import saveLinks from './controllers/saveLinks.js';

const app = express();
// middlewares
app.use(cors());
app.use(json()); 

// Connect to MongoDB
await connect(process.env.MONGO_URI)
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
