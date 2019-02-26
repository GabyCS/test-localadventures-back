const express = require('express');

const app = express();
const routes = require('./api/routes');

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log('APP listening on port '+process.env.PORT);
})
