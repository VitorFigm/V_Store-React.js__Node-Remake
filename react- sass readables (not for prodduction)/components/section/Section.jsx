import React from 'react'
import state_f, { query_filter, query_only } from '../../general_functions'

export default (props) => {
    const { page, total_page, total_page_change,
        query, prod_list_change,
        saved_form, page_change } = props
    ///resend query when change page
    const to_page = (to_page) => {
        document.getElementById('recommendation').scrollIntoView();
        prod_list_change(undefined)
        if (saved_form !== undefined) query_filter((result, pages_n) => {
            total_page_change(pages_n)
            page_change(to_page)
            prod_list_change(result)
        }, to_page, saved_form)

        else query_only((result, pages_n) => {
            total_page_change(pages_n)
            page_change(to_page)
            prod_list_change(result)
        }, to_page, query)
    }

    const Recommend_msg = () => {
        let msg = ""
        if (query !== "") msg += 'Results for "' + query + '"'
        if (saved_form !== undefined) {
            const filter_for = saved_form.get('filter_for')
            const brand = saved_form.get('brand')
            const minimum_price = saved_form.get('minimum_price')
            const maximum_price = saved_form.get('maximum_price')

            msg += "  (" + filter_for + ")"
            if (brand !== "All") msg += "  (" + brand + "brand phones)"
            if (minimum_price !== "" || maximum_price !== "") msg +=
                "  (Price rage:" + minimum_price + " to " + maximum_price + ")"
        }

        if (msg == "") msg = "Highest Rated"
        return (<h1 id="results_title">{msg}</h1>)
    }

    const prev_page_tag = () => {
        if (page == 1) return (<button className="inactivated"> {'<'} </button>)
        else return (<button className="prev_page" onClick={() => to_page(page - 1)}> {'<'} </button>)
    }
    const next_page_tag = () => {
        if (page == total_page) return (<button className="inactivated"> {'>'} </button>)
        else return (<button className="next_page" onClick={() => to_page(page + 1)}> {'>'} </button>)
    }

    return (
        <section>
            <div className="container" id="intro">

                <h1>Hi, welcome to the V store, </h1>

                <p>A cellphone shop simulator</p>

            </div>
            <div className="blank_interval"></div>
            <div id="recommendation" className="container">
                <div className="blank_interval"></div>
                {Recommend_msg()}


                {props.children}

                <div id="page">
                    {prev_page_tag()}
                    <div>Page {page} of {total_page}</div>
                    {next_page_tag()}
                </div>

                <h1>Help to find a cellphone</h1>
                <div id="find_a_cell"
                    onClick={() => {
                        state_f.final('menu_filter_screen')
                        state_f.final('menu_filter')
                    }}>find with filters</div>
                <div className="blank_interval"></div>
            </div>
        </section>

    )
}