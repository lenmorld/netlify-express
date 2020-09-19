const body_parser = require('body-parser')
const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(body_parser.json())

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

module.exports = router;
