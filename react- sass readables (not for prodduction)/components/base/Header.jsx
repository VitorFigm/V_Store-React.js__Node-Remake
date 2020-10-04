import React from 'react'
import state_f from '../../general_functions'
import { query_only } from '../../general_functions'

export default (props) => {
    const { prod_list_change, saved_form_change,
        query_change, page_change, total_page_change } = props
    const query = () => {
        saved_form_change(undefined)
        const value = document.getElementById('search_input').value;

        query_change(value)
        prod_list_change(undefined)
        page_change(1)
        query_only((result, pages_n) => {
            total_page_change(pages_n)
            prod_list_change(result)
        }, 1, value)
    }

    return (
        <>
            <header id="header" className="initial_state">
                <a href="/" id="logo"> </a>

                <div id="options_bellow_search">
                    <a href="" id="contact">Contact me</a>
                </div>

                <div id="header_btns">
                    <button id="search_mobile_btn"
                        onClick={() => {
                            state_f.final('search')
                            state_f.final('search_translucid_screen')
                        }}></button>

                    <button id="hamb"
                        onClick={() => {
                            state_f.final('menu_screen')
                            state_f.final('menu')
                        }}></button>
                </div>
            </header>
            <div id="search_translucid_screen" className="initial_state"
                onClick={() => {
                    state_f.initial('search')
                    state_f.initial('search_translucid_screen')
                }}>
                <button id="search_close_btn"></button>
            </div>

            <div id="search" className="initial_state">
                <input type="text" id="search_input"
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') query()
                    }
                    }
                ></input>
                <button id="query_btn"
                    onClick={query}
                > <img /> </button>
            </div>
        </>

    )
}