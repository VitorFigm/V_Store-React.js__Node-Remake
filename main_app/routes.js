const express = require('express')
const router = express.Router()
const views = require('./views')


router.get("/", views.app_home)
router.get("/brand_list", views.brand_list)
router.get("/home", views.home_query)
router.get("/query_only", views.query_only)
router.get("/query_filter", views.query_filter)




module.exports = router