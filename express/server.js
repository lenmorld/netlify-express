'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));

router.get('/meals', (req, res) => res.json({
  data: [
    {
      name: "chicken",
      picture: "🍗",
      price: "$6.50"
    },
    {
      name: "sandwich",
      picture: "🥪",
      price: "$4.50"
    },
    {
      name: "bento",
      picture: "🍱",
      price: "$11.50"
    }
  ]
}));

router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(cors());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
