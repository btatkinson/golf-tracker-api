import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

import auth from './routes/auth';
import users from './routes/users';

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.use('/api/auth', auth);
app.use('/api/users', users);

app.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: { global: "Invalid credentials "}});
});

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(9000, () => console.log('Running on localhost: 9000'));

// end
