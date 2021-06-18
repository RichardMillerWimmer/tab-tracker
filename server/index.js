require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

const {SERVER_PORT} = process.env;

app.listen(SERVER_PORT, () => console.log(`server listening on ${SERVER_PORT}`));