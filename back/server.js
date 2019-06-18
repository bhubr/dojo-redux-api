const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.js');

const app = express();
app.use(bodyParser.json());
app.use('/api/users', usersRouter);

app.listen(8000);
