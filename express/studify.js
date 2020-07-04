const express = require('express')
const router = express.Router()

const body_parser = require('body-parser')

// db setup
const DbConnection = require('./db');


router.use(body_parser.json())

const getTimeStamp = () => {
  const date = new Date();
  return date.toUTCString();
}

const samples = [
  {
    id: 1, question: "What are the differences between variables created using `let`, `var` or `const`?",
    answer: `\`var\` variables are scoped to the function in which they are created, or if created outside of any function, to the global object. \`let\` and 
    \`const\` variables are block scoped, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop).`
  },
  {
    id: 2, question: `When would you use the document's \`load\` event?`, answer: `The \`load\` event fires at the end of the document loading process when all of the objects, images, scripts, and links are loaded.
    <br/>
  It is used to delay the execution of a program until all necessary resources are ready.` },
]

router.get('/cards', async (req, res) => {
  // res.json(samples)
  const dbCollection = await DbConnection.getCollection("cards");
  const cards = await dbCollection.find().toArray();
  res.json(cards)
})

router.post('/cards', async (req, res) => {
  const question = req.body

  if (!(question.question && question.answer)) {
    res.json({
      error: "missing a required param"
    })
  } else {
    const dbCollection = await DbConnection.getCollection("cards");

    // samples.push()
    await dbCollection.insertOne({
      ...question,
      id: samples.length + 1,
      createdAt: getTimeStamp()
    });

    const cards = await dbCollection.find().toArray();
    res.json(cards)

    // res.json(samples)
  }

})

module.exports = router;
