var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = "postgres://localhost:5432/sigma";

router.get('/', function (req, res) {
  console.log('GET request');

  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      console.log('connection error');
      res.sendStatus(500);
    }

    client.query('SELECT * FROM treats', function (err, result) {
      done();

      if (err) {
        console.log('query error');
        res.sendStatus(500);
      }

      res.send(result.rows);

    });
  });
});

router.post('/', function (req, res) {
  var newTreat = req.body;
  console.log('POST request');

  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      console.log('connection error');
      res.sendStatus(500);
    }

    client.query('INSERT INTO treats (name, description, pic)' +
    'VALUES $1 $2 $3',
    [newTreat.name, newTreat.descripion, newTreat.pic],
    function (err, result) {
      done();

      if (err) {
        console.log('query error');
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

module.exports = router;
