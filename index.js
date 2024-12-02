
const express = require('express')
const sequelize = require('./configs/db_config')
const productRoutes = require('./routes/product.routes')
const app = express()

app.use('/products', productRoutes)
const port = 3000



sequelize.authenticate()
    .then(() => {
        console.log('Database Connected Successfully');
    })
    .catch(() => {
        console.error('Database Connection Failed');

    })

app.listen(() => {
    console.log(`Server Started Listening On Port ${port}`);

})