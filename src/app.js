const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const route = require('./routes/index');
const bodyParser = require('body-parser');
require('./database/mongoose');

app.use( bodyParser.json() );
app.use( express.json() );
app.use('/', route);

app.listen(port, () => {
  console.log('Server listening on ' + port);
});
