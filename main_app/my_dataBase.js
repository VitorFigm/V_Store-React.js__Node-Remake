const mongoose = require('mongoose')

async function connect_database() {
    try {
        const url = process.env.MONGODB || 'mongodb://localhost/Product_info'
        const promise = mongoose.connect(url,
            { useNewUrlParser: true, useUnifiedTopology: true })
        await promise
        console.log("connected to database")
    } catch (error) {
        console.log("database error:" + error)
    }

}
mongoose.Promise = global.Promise
connect_database()

const prods_schema = mongoose.Schema({
    brand: String,
    title: String,
    url: String,
    rating: Number,
    price: Number,
    image: String,
})

const products = mongoose.model('Product_info', prods_schema, 'Product_info')

module.exports = products;