const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const queries = require('./routes/api/queries');
const db = require('./config.js');

const app = express();

//BodyParser middleware
app.use(bodyParser.json());

//DB Config
mongoose.connect(db.mongoURI)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/queries', queries);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`));
