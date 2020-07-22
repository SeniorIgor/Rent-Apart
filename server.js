// const express = require('express'),
//   path = require('path'),
//   bodyParser = require('body-parser'),
//   cors = require('cors'),
//   sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');



// db.serialize(function () {
// db.run("CREATE TABLE lorem (info TEXT)");

// var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
// stmt.finalize();

// db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
//    console.log(row.id + ": " + row.info);
//   });
// });

// db.close();



// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// const port = process.env.PORT || 4000;

// const server = app.listen(function () {
//   console.log('Listening on port ' + port);
// });