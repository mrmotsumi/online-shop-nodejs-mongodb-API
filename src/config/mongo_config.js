const mongodb = require('mongoose');
require('dotenv/config');

const con = process.env.MONGO_CONNECTION;

var connection = mongodb.connect(con, { dbName: 'e-shop'}).then( () => {
    console.log('Database connected..');
}).catch( (err) => {
    console.log(err);
});

module.exports = connection;