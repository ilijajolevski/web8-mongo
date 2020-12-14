var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
var jsonParser = bodyParser.json()

async function insertUser(req,callres){
  console.log("user: " + req.body.username);
  console.log("pass:" + req.body.password);
  const kveri = {
    username: req.body.username
  };
  const newUser = {
    username: req.body.username,
    password: req.body.password
  }
  const params = {
    upsert: true
  }
  MongoClient.connect('mongodb://localhost:27017/WEB', function(err, db) {
    if (err) throw err;
    var dbo = db.db("WEB");
    dbo.collection("Users").insertOne(newUser, function(err, res) {
      if (err) throw err;
      console.log("1 user inserted");
      db.close();
    });
    

  });
  callres.send('user inserted: ' + req.body.username)

}


/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/WEB', function (err, client) {
    if (err) throw err
      var db = client.db('WEB')
      db.collection('Users').find().toArray(function (err, result) {
      if (err) throw err
        res.render('user', { user:result });
    })
  })
});

router.post('/', jsonParser, insertUser);

router.delete('/:idto', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/WEB', function (err, client) {
    if (err) throw err
      const kveri = {
        _id:ObjectID(req.params.idto)
      };
      console.log(req.params.idto)
      var db = client.db('WEB')
      db.collection('Users').deleteOne(kveri, function(err, result) {
      if (err) throw err
      
       console.log(result.deletedCount);
       if (result.deletedCount != 0){

       }
        //res.send(result);
        //res.render('oneuser', { user:result });
    })
  })

});

router.get('/:idto', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/WEB', function (err, client) {
    if (err) throw err
      const kveri = {
        _id:ObjectID(req.params.idto)
      };
      console.log(req.params.idto)
      var db = client.db('WEB')
      db.collection('Users').findOne(kveri, function(err, result) {
      if (err) throw err
      
        //res.send(result);
        res.render('oneuser', { user:result });
    })
  })

});


module.exports = router;
