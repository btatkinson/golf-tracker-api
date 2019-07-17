import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import auth from './routes/auth';

const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/golf-tracker');

app.use('/api/auth', auth);

app.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: { global: "Invalid credentials "}});
});

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(9000, () => console.log('Running on localhost: 9000'));

// end
