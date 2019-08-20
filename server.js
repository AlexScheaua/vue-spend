const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const Generator = require('./framework/generator')

const app = express();
app.use(express.json());
app.use(cors());
app.use(history());
app.use(express.static('dist'));

app.put('/auth', async (req, res) => {
  let response = '';

  await fetch(`https://vspend.firebaseio.com/users/${req.body.name}.json`)
    .then(resp => resp.json())
    .then(data => {
      if (req.body.collection === data.collection) {
        response = data.link;
      } else {
        response = false;
      }
    })
  res.status(200).send(JSON.stringify(response));

})

app.put('/savings/:collection', async (req, res) => {
  
  let response = '';
  
  await fetch(`https://vspend.firebaseio.com/${req.params.collection}.json`)
    .then(res => res.json())
    .then(data => response = data)
  
  let totalSavings = Generator.getTotalSavings(response);

  res.status(200).send(JSON.stringify(totalSavings))
})

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started on port: ' + port);