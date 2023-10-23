const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send({
        hello: "world"
    })
 })

/** catch 404 and fwd to error handler */

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/** error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

module.exports = app;
