const express = require('express');
const app = express();
const port = 3600;

app.get('/', (req, res) => {
    res.send('This is a very important thing, nodemon lecture!')
})

app.get('/subPage', (req, res) => {
    res.send('This is a sub page, nodemon lecture!')
})

app.listen(port, () => console.log(`App listening at port ${port}`))