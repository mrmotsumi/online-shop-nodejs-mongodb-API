require ('../config/mongo_config');
const mongodb = require('mongoose')
const { Schema } = mongodb;

const productSchema = new Schema({
  name:    {type: String, required: true}, 
  description:    {type: String, required: true},
  richDescription:    {type: String, default: ''},
  image:   {type: String,  default: ''},
  images:   [ {type: String}],
  brand:    {type: String, required: true},
  price:    {type: Number, default: 0, required: true},
  category:    {type: mongodb.Schema.Types.ObjectId, ref: 'Category', required: true },
  countInStock:{ type: Number, required: true},
  rating: {type: Number, default: 0},
  numReviews: {type: Number, default: 0},
  isFeatured: {type: Boolean, default: false},
  dateCreated:    { type: Date, default: Date.now },
});

const Product = mongodb.model('Product', productSchema);

module.exports = Product ;