const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/popcat', (req, res) => {
    res.sendFile(__dirname + '/popcat.html')
});

app.listen(process.env.PORT, (error) => {
    if (error) console.log("응답 실패")
});