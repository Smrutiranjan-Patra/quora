const app = require ('./app');
require ('dotenv').config ();
const port = process.env.PORT || 2233;

const connect = require ('./configs/db');

app.listen (port, async (req, res) => {
  await connect ();
  console.log ('listening to port 2233');
});
