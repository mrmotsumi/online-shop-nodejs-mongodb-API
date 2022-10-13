require ('../config/mongo_config');
const mongodb = require('mongoose')
const { Schema } = mongodb;

const userSchema = new Schema({
  name:    {type: String, required: true}, 
  email:    {type: String, required: true},
  image:   {type: String, required: true},
  dateCreated:    { type: Date, default: Date.now },
});

const User = mongodb.model('User', userSchema);

module.exports = User ;