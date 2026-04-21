require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id; 
  console.log(id);
  res.send(id);
});

app.get('/search', (req, res) => {
  const id = req.query.id; 
  console.log(id);
  res.send(id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
