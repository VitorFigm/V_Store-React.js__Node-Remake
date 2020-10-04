const query_function = require('./query_function')
const fs = require('fs')

function app_home(req,res){
    res.sendFile('/build/index.html')
}
function brand_list(req,res){
    res.send(JSON.parse(fs.readFileSync("brand_list.json")))
}
async function home_query(req, res) {
    const prods = await query_function({ page: 1, sort: { rating: 'desc' } })
    res.send(prods)
}
async function query_only(req, res) {
    const { query, page } = req.query
    const prods = await query_function({
        page: page,
        sort: { rating: 'desc' },
        query: query
    })
    res.send(prods)
}
async function query_filter(req, res) {
    let { query,
        brand, maximum_price,
        minimum_price, filter_for, page }
        = req.query

    let find_args = {}
    //price
    maximum_price = parseFloat(maximum_price)
    minimum_price = parseFloat(minimum_price)
    if (!isNaN(minimum_price)) find_args.price = { $gt: minimum_price }
    if (!isNaN(maximum_price)) find_args.price = { ...find_args.price, $lt: maximum_price }
    //brand
    if (brand != "" 
    && brand != "All" && 
    brand != undefined) find_args.brand = brand
    //filter_for
    let sort
    switch (filter_for) {
        case "Lower price":
            sort = { price: 'asc' }
            break;
        case "Higher price":
            sort = { price: 'desc' }
            break
        default:
            sort = { rating: 'desc' } ///better ratings
    }
    const prods = await query_function({
        'page': page,
        'sort': sort,
        'query': query,
        'find_args': find_args
    })

    res.send(prods)
}

module.exports = {
    'app_home':app_home,
    'home_query': home_query,
    'query_only': query_only,
    'query_filter': query_filter,
    'brand_list':brand_list, 
}