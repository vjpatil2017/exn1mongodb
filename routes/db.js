
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;




router.get('/', function(req, res, next) {
  const uri ="mongodb+srv://exn1user:user1@exn1mean.48uvk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //process.env.MONGODB_URI;

  MongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    const database = db.db('sample_stud');
    const student = database.collection('student');
    const query = {};

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
