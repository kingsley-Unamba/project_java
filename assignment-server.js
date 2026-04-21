require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('My Week 2 Api!');
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({error: 'Missing Data'});
    }
    res.json({ Message: `Hello ${name}` });
});

app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    res.send(`user ${id} profile`);
});

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
});