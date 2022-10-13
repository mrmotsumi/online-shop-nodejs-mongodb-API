require ('../config/mongo_config');
const mongodb = require('mongoose')
const { Schema } = mongodb;

const categorySchema = new Schema({
  id:    {type: String, required: true},
  name:    {type: String, required: true}, 
  color:   {type: String, required: true},
  icon:   {type: String, required: true},
  image:   {type: String, required: true},
  dateCreated:    { type: Date, default: Date.now },
});

const Category = mongodb.model('Order', categorySchema);

module.exports = Category ;