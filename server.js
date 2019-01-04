
const path = require('path');
const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(morgan('tiny'))
app.use(express.static(path.resolve(".")))
app.listen(3080, () => console.log('CES-frames app listening on port 3080!'))

app.get('/', function(req,res) {
  res.sendfile('maincontents.htm');
});