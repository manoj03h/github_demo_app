const express = require('express');
const serverless = require('serverless-http');
const app = express()
//const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: "Hello World!"})
});

//app.use("/.netlify/functions/api", router);
app.use("/", router);

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`)
// });

module.exports.handler = serverless(app);