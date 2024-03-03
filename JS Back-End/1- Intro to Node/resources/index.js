const express = require('express');
const hbr = require('express-handlebars');

const app = express();


const handlebars = hbr.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use('/content', express.static('content'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/cats/add-cat', (req,res)=>{
    res.render('addCat')
})
app.get('/cats/add-breed', (req,res)=>{
    res.render('addBreed')
})


app.listen(3000, () => {
    console.log('server is running on port 3000...');
});
