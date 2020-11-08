const express = require('express');
const path = require('path');

const app = express();

const testRouter = require('./routes/test');
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

app.use('/test', testRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});

module.exports = app;
