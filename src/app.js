const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const route = require('./routes/index');

app.use('/', route);

app.listen(port, () => {
    console.log("Server listening on " + port)
});
