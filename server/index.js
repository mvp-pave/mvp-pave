const express = require('express');
const app = express();
const port = 3001;

const axios = require('axios');


const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/pave', router)

app.use('/yelp', axios.get )

app.listen(port, () => console.log(`listening on port ${port}!`))