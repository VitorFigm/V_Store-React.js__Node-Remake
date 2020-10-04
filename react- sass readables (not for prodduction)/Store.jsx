import React, { useState } from 'react'

import './resources/style.css'
///componenents
import Header from './components/base/Header'
import Menu from './components/base/Menu'
import Menu_filter from './components/base/Menu_filter'
import Section from './components/section/Section'
import Recommends from './components/section/Recommends'

import { home_request, request_brand_list } from './general_functions'

export default () => {
  ///states
  const [query, query_change] = useState('')
  const [prod_list, prod_list_change] = useState()
  const [brand_list, brand_list_change] = useState([])
  const [total_page, total_page_change] = useState(1)
  const [page, page_change] = useState(1)
  const [saved_form, saved_form_change] = useState()
  ///query when page loads
  window.addEventListener('load', () => {
    home_request(
      (result, pages_n) => {
        total_page_change(pages_n)
        prod_list_change(result)
      }
      , 1)

      request_brand_list(
        (result)=>{
          brand_list_change(result)
        }
      )
  })

  return (
    <>
      <div id="scroll">V</div>
      <Header
        page_change={page_change}
        total_page_change={total_page_change}
        prod_list_change={prod_list_change}
        query_change={query_change}
        saved_form_change={saved_form_change}
      ></Header>
      <Menu_filter
        page_change={page_change}
        total_page_change={total_page_change}
        prod_list_change={prod_list_change}
        query={query}
        brand_list={brand_list}
        brand_list_change={brand_list_change}
        saved_form_change={saved_form_change}
      ></Menu_filter>
      <Menu></Menu>
      <Section
        prod_list_change={prod_list_change}
        page={page}
        total_page={total_page}
        total_page_change={total_page_change}
        page_change={page_change}
        query={query}
        saved_form={saved_form}
      >
        <Recommends
          prod_list={prod_list}
          prod_list_change={prod_list_change}
        />
      </Section>
    </>
  )
}

