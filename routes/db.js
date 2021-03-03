
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;




router.get('/', function(req, res, next) {
  const uri = process.env.MONGODB_URI;

  MongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    const database = db.db('sample_stud');
    const student = database.collection('student');
    const query = {first_name: 'John'};

    student.find(query).toArray(function (err, stud) {
      if (err) throw err;
      res.render('pages/mongodb', {results: stud});
    });

    db.close(function (err) {
      if (err) throw err;
    });

  });
});

module.exports = router;
