const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');
const api = process.env.API_URL;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

const productRouter = require('./src/routes/products');
const categoryRouter = require('./src/routes/categories')



app.use(`${api}/product`, productRouter)
app.use(`${api}/category`, categoryRouter)



app.listen(3000, () =>{
    console.log(api);

})