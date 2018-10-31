const express = require('express');
const router = express.Router();

//Query model
const Query = require('../../models/Query');

router.get('/', (req, res) => {
  Query.find()
    .sort({ date: -1 })
    .then(queries => res.json(queries))
});


router.post('/', (req, res) => {
  const newQuery = new Query({
    name : req.body.name,
    email : req.body.email,
    message : req.body.message
  });
  newQuery.save().then(query=>res.json({query,success:'true'}));
});

module.exports = router;
