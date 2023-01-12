const express = require('express');
const serverless = require('serverless-http');
const app = express()
//const port = process.env.PORT || 3000;
const router = express.Router();

const someData =  [
{id: 1, message: "Message one"},
{id: 2, message: "Message two"},
{id: 3, message: "Message three"}
];

router.get('/', (req, res) => {
  res.json([{"message": "Hello World!"}])
});

//app.use("/.netlify/functions/api", router);
app.use("/", router);

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`)
// });

module.exports.handler = serverless(app);