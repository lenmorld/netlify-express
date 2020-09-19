'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

const router = express.Router();

const studify = require('./studify')

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

router.get('/foods/meals', (req, res) => res.json({
  data: [
    {
      name: "burger",
      picture: "🍔",
      price: "$4.50"
    },
    {
      name: "pizza",
      picture: "🍕",
      price: "$2.50"
    },
    {
      name: "ramen",
      picture: "🍜",
      price: "$5.50"
    },
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

router.get('/desserts', (req, res) => res.json({
  data: [
    {
      name: "cupcake",
      picture: "🧁",
      price: "$1.50"
    },
    {
      name: "chocolate",
      picture: "🍫",
      price: "$1.50"
    },
    {
      name: "custard",
      picture: "🍮",
      price: "$3.50"
    }
  ]
}));

router.get('/foods/desserts', (req, res) => res.json({
  data: [
    {
      name: "cupcake",
      picture: "🧁",
      price: "$1.50"
    },
    {
      name: "chocolate",
      picture: "🍫",
      price: "$1.50"
    },
    {
      name: "custard",
      picture: "🍮",
      price: "$3.50"
    },
    {
      name: "donut",
      picture: "🍩",
      price: "$1.50",
      withCoffee: true
    },
    {
      name: "ice cream",
      picture: "🍦",
      price: "$1.00"
    },
    {
      name: "cake",
      picture: "🍰",
      price: "$2.50",
      withCoffee: true
    }
  ]
}));

router.get('/foods/all', (req, res) => res.json({
  data: [
    {
      id: 1,
      name: "burger",
      picture: "🍔",
      price: "$4.50"
    },
    {
      id: 2,
      name: "pizza",
      picture: "🍕",
      price: "$2.50"
    },
    {
      id: 3,
      name: "ramen",
      picture: "🍜",
      price: "$5.50"
    },
    {
      id: 4,
      name: "chicken",
      picture: "🍗",
      price: "$6.50"
    },
    {
      id: 5,
      name: "sandwich",
      picture: "🥪",
      price: "$4.50"
    },
    {
      id: 6,
      name: "bento",
      picture: "🍱",
      price: "$11.50"
    },
    {
      id: 7,
      name: "cupcake",
      picture: "🧁",
      price: "$1.50"
    },
    {
      id: 8,
      name: "chocolate",
      picture: "🍫",
      price: "$1.50"
    },
    {
      id: 9,
      name: "custard",
      picture: "🍮",
      price: "$3.50"
    },
    {
      id: 10,
      name: "donut",
      picture: "🍩",
      price: "$1.50",
      withCoffee: true
    },
    {
      id: 11,
      name: "ice cream",
      picture: "🍦",
      price: "$1.00"
    },
    {
      id: 12,
      name: "cake",
      picture: "🍰",
      price: "$2.50",
      withCoffee: true
    }
  ]
}));

router.post('/', (req, res) => res.json({ postBody: req.body }));


// use studify routes
router.use("/", studify);

router.use(cors());
app.use(cors());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
