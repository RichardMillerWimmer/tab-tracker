require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');

const authCtrl = require('../server/controllers/AuthController')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const {SERVER_PORT} = process.env;

// Endpoint Routes 

//Auth Controller
app.post('/register', authCtrl.register);

sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, () => console.log(`sequelize connected and server listening on ${SERVER_PORT}`))

})
