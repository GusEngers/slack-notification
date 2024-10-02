const express = require('express');
const path = require('path');
const app = express();

const client = require('./client/routes/index.js');
const api = require('./api/routes/index.js');
const { handleApiError } = require('./utils/error.js');

app.use(express.json());
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(express.static(path.join(__dirname, 'client/views')));

app.use('/api', api, handleApiError);
app.use('/', client);

module.exports = app;
