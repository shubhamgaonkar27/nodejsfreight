const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("error connecting database");
    }
    console.log("connected to mongo db");

    var express = require('express');

    var app = express();

    app.use(express.static(__dirname + '/app'));
    app.get('/', (req, res) => {
        res.send('hello express!');
    });

    app.listen(3000, () => {
        console.log('server started');
    });
});