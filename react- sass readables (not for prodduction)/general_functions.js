///change class
function final_state(el) {
    el = document.getElementById(el)
    el.classList.remove('initial_state')
}
function initial_state(el) {
    el = document.getElementById(el)
    el.classList.add('initial_state')
}

///HTTP request
export function request_brand_list(callback) {
    const req = new XMLHttpRequest()
    req.open('GET', 'brand_list')
    req.send()
    req.onload = () => {
        const resp = JSON.parse(req.response);
        callback(resp)
    }
}

export function home_request(callback, page) {
    ////form
    const form = new FormData()
    form.append('page', page)
    //requqest
    const form_url = new URLSearchParams(form).toString()
    const req = new XMLHttpRequest()
    req.open('GET', '/home?' + form_url)
    req.send()
    req.onload = () => {
        const resp = JSON.parse(req.response);
        const { pages_n, results } = resp
        callback(results, pages_n)
    }

}

///HTTP request
export function query_only(callback, page, query) {
    ////form
    const form = new FormData()
    form.append('page', page)
    form.append('query', query)
    const form_url = new URLSearchParams(form).toString()
    const req = new XMLHttpRequest()
    req.open('GET', '/query_only?' + form_url)
    req.send()
    req.onload = () => {
        const resp = JSON.parse(req.response);
        const { pages_n, results } = resp
        callback(results, pages_n)
    }

}

export function query_filter(callback, page, filter_form) {
    ///from
    filter_form.append('page', page)
    //requqest
    const form_url = new URLSearchParams(filter_form).toString()
    const req = new XMLHttpRequest()
    req.open('GET', '/query_filter?' + form_url)
    req.send()
    req.onload = () => {
        const resp = JSON.parse(req.response);
        const { pages_n, results } = resp
        callback(results, pages_n)
    }

}

export default { final: final_state, initial: initial_state }