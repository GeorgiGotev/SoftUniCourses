const express = require('express');
const expressConfig = require('./config/express');
const handlebarsConfig=require('./config/handlebars');
const homeController=require('./controllers/homeController');
const cubeController=require('./controllers/cubeController');

const PORT = 3000;

const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(homeController);
app.use('/cubes',cubeController);
app.get('*', (req,res)=>{
    res.render('404');
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
