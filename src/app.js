const express = require('express');
require('express-async-errors');
const middleware = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', routes.auth);

app.use('/user', routes.user);

app.use(middleware.httpError);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
