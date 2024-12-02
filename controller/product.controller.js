const Product = require('../models/product.model')



const getAllProducts = async (req, res) => {
    try {
        const productData = await Product.findAll()
        if (productData) {
            res.status(200).json({ message: 'Product data fetched successfully' })
        } else {
            res.status(404).json({ message: "No Data Found" })
        }
    } catch (error) {
        console.error('No Data Found');
        res.status(500).json({ message: "failed to fetch the Products" })
    }
}

module.exports = {
    getAllProducts
}