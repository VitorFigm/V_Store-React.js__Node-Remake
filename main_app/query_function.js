const my_dataBase = require('./my_dataBase')

const product_per_page = 8;

async function query_function(args) {
    ///default args
    let {
        query = "",
        find_args = {},
        sort = {},
        page = 1,
    } = args

    const P_n = product_per_page

    const func = () => {
        ///query
        if (query != "")
            find_args = {
                title: { $regex: query, $options: "i" },
                ...find_args
            }
        return my_dataBase.find(find_args)
            .sort(sort)
            .skip((page - 1) * P_n)
            .limit(P_n).lean()
    }
    try {
        const db_len = await my_dataBase.countDocuments({
            title: { $regex: query, $options: "i" },
            ...find_args
        })


        let page_number = parseInt(db_len / P_n)
        page_number = page_number == 0 ? 1 : page_number

        const my_query = await func()
        return {
            'pages_n': page_number,
            'results': my_query
        }
    } catch (err) {
        console.log("query error:" + err)
        return {
            'pages_n': 1,
            'results': []
        }
    }
}

module.exports = query_function