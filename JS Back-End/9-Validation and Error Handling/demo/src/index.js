const express = require('express');
const expressConfig = require('./config/express');
const handlebarsConfig=require('./config/handlebars');
const dbConnect=require('./config/db');
const errorHandler=require('./middlewares/errorMiddleware');
const routes=require('./routes.js');

const PORT = 3000;

const app = express();

dbConnect()
.then(()=>console.log('DB is started'))
.catch(err=>{console.log('DB error:', err);   
});

expressConfig(app);
handlebarsConfig(app);
app.use(routes);
app.use(errorHandler);


app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
