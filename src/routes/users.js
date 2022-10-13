const {Product} = require('../model/product');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {

    const productList = await Product.find();

    res.send(productList)
})

router.post(`/`, (req, res) => {

    var product = new Product({
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    })

    product.save().then( (createdProduct => {
         res.status(201).json(createdProduct)
    })).catch((err) =>{

        res.status(500).json({
            error: err,
            success: false
        });

    });

})



module.exports = router;