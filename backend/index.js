import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';

import emailRouter from './routes/auth/email.js';
import userRouter from './routes/getUserDetails.js';
import inputNameRouter from './routes/auth/inputName.js';
import amznOuthRouter from './routes/amznOuth/amznOauth.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure: true if using https
}));

app.use('/auth/email', emailRouter);
app.use('/input-name', inputNameRouter);
app.use('/user', userRouter);
app.use('/auth/amznOuth', amznOuthRouter);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(4000, () => console.log('Server listening on port 4000'));
