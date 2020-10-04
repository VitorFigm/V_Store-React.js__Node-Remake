//def
const path = require('path')
const express = require('express')
const app = express()



function get_path(name){
    return path.join(__dirname,name)
}

///static
app.use(express.static (get_path("build") ))

///apps routes
const main_app = require(get_path('main_app/routes'))
app.use("/",main_app)


//run server

app.listen(process.env.PORT || 8000,
    _=>{console.log('server is running')}
    )


