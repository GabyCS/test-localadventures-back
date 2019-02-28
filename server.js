const express = require('express');

const app = express();
var bodyParser = require('body-parser');
const routes = require('./api/routes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log('APP listening on port '+process.env.PORT);
})
