const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000



app.use(cors())
const categories=require('./Data/categories.json')

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.get('/courses', (req, res) => {
    console.log(req.params.id)
  res.send(categories)
})



app.get('/courses/course/:id', (req, res) => {
  const _id=req.params.id

     const category_news=categories.find(n=>n.id==_id)
     res.send(category_news)
 console.log(category_news)
  
 })







 

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})