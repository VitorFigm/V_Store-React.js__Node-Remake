import React, { useEffect, useState } from 'react'
import state_f from '../../general_functions'
import { request_brand_list, query_filter } from '../../general_functions'


export default (props) => {
    const { query, brand_list,
        brand_list_change, saved_form_change,
        prod_list_change, page_change, total_page_change } = props

    let brand_options = brand_list.length != 0 ? brand_list.map((v, i, arr) => (
        <option value={v} key={i}>{v}</option>
    )
    ) : <option disabled >loading...</option>

    ///submit form
    window.addEventListener('load', () => {
        document.getElementById('menu_filter').addEventListener('submit', function (e) {
            e.preventDefault()
            const h_price = this.elements['maximum_price'].value
            const l_price = this.elements['minimum_price'].value
            if (l_price > h_price) {
                document.getElementById('error_msg').innerHTML = "Price min needs to be lower than Price max"
                document.getElementById('error_msg_box').style.display = 'flex'
            } else {
                page_change(1)
                ///close form
                state_f.initial('menu_filter_screen')
                state_f.initial('menu_filter')

                prod_list_change(undefined)
                const my_form = new FormData(this)
                saved_form_change(my_form)
                query_filter((result,pages_n) => {

                    total_page_change(pages_n)
                    prod_list_change(result)

                }, 1, my_form)
            }

        })
    })



    return (
        <div id="menu_filter_screen" className="initial_state">
            <div id="menu_filter_onclick"
                onClick={() => {
                    state_f.initial('menu_filter_screen')
                    state_f.initial('menu_filter')
                }}
            ></div>

            <button className="filter_close_btn"
                onClick={() => {
                    state_f.initial('menu_filter_screen')
                    state_f.initial('menu_filter')
                }} />

            <form id="menu_filter" className="initial_state">
                <label htmlFor="filter_for"> Filter for: </label>

                <select name="filter_for" className="menu_filter_spaces">

                    <option defaultValue="better ratings">
                        Better ratings
                </option>

                    <option defaultValue="lower price">
                        Lower price
                </option>

                    <option defaultValue="higher price">
                        Higher price
                </option>

                </select>

                <label htmlFor="brand"> Brand: </label>

                <select name="brand" className="menu_filter_spaces" id="filter_brands">
                    <option defaultValue="all" >All</option>
                    {brand_options}
                </select>

                <label htmlFor="minimum_price">Price min</label>
                <input type="number" name="minimum_price" className="menu_filter_spaces" />

                <label htmlFor="maximum_price">Price max</label>
                <input type="number" name="maximum_price" className="menu_filter_spaces" />


                <input type="hidden" name="query" defaultValue={query} />

                <input type="submit" defaultValue="Filter" id="submit_btn" />


                <div id="error_msg_box">
                    <div id="error_msg"></div>
                    <button type="button" className="filter_close_btn"
                        onClick={() => {
                            document.getElementById('error_msg_box').style.display = 'none'
                        }}
                    />
                </div>
            </form>
        </div>
    )
}