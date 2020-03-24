const express = require('express');
const app = express();
const path = require('path');
const contentful = require('contentful');
const variables = require('./variables');
const port = 3000;

const client = contentful.createClient({
  space: variables.space,
  accessToken: variables.token
})

app.get('/advice', (req, res) => {
  client
    .getEntries()
    .then(entry => console.log(entry.items))
    .catch(err => console.log(err));
})

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))