require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const {SERVER_PORT} = process.env;

app.post('/register', (req, res) => {
    res.send({
        message: 'Your user was registered!'
    })
})

app.listen(SERVER_PORT, () => console.log(`server listening on ${SERVER_PORT}`));