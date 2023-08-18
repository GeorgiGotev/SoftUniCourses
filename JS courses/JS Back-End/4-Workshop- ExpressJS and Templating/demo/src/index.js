const express= require ('express');
const handlebars= require('express-handlebars');
const path=require('path')

const app=express();


app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', 'src/views');


const PORT=3000;

app.use(express.static('./src/public'))

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}...`))