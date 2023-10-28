const express = require('express')
const bodyParser = require('body-parser')
require("dotenv").config();
const { authenticate } = require('./middlewares/auth')
const { errorHandlers } = require('./middlewares/errorHandler')
const morgan = require('morgan')

const port = 3001
const app = express()

const usersRouter = require('./router/users')
const moviesRouter = require('./router/movies');

app.use(morgan('common'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', usersRouter);
// app.use(authenticate);
app.use('/movies', moviesRouter);

app.use(errorHandlers)

app.listen(port, () => {
    console.log(`running port ${port}`)
})

module.exports = app