const express = require('express')
const morgan = require('morgan')
const MOVIES = require('./moviedata.json');

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
    let response = MOVIES;
    res.send(response);
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at http: //localhost:PORT`)
})
