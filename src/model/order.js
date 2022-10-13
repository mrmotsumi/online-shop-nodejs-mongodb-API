require ('../config/mongo_config');
const mongodb = require('mongoose')
const { Schema } = mongodb;

const orderSchema = new Schema({
  name:    {type: String, required: true}, 
  email:    {type: String, required: true},
  image:   {type: String, required: true},
  dateCreated:    { type: Date, default: Date.now },
});

const Order = mongodb.model('Order', orderSchema);

module.exports = Order ;