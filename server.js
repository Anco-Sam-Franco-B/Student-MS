import express from 'express'
import bodyParser from 'body-parser'

// import db from './DBConfig/database.js'
import router from './routes/index.js'

const app=express()
const port=process.env.PORT || 9000

//setuping view engine like ejs
app.set('view engine','ejs')
app.set('views','src')

//middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static('public'))
app.use('/', router)
app.use((req,res)=>{
    res.render('404',{title: '404 Not Found',body: '404 Page Not Found'})
})

app.listen(port,async ()=>{
    await console.log(`\nAPI Server is running at http://localhost:${port}\n`)
})