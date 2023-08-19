const express = require('express');
const expressConfig = require('./config/express');
const handlebarsConfig=require('./config/handlebars');
const dbConnect=require('./config/db');
const homeController=require('./controllers/homeController');
const cubeController=require('./controllers/cubeController');

const PORT = 3000;

const app = express();

dbConnect()
.then(()=>console.log('DB is started'))
.catch(err=>{console.log('DB error:', err);   
});

expressConfig(app);
handlebarsConfig(app);
app.use(homeController);
app.use('/cubes',cubeController);
app.get('*', (req,res)=>{
    res.render('404');
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
