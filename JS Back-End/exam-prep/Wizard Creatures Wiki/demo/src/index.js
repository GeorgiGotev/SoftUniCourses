const express = require('express');
const expressConfig = require('./config/express');
const hbsConfig= require('./config/hbs');
const dbConnect=require('./config/db');
const routes = require('./routes');

const PORT=3000;

const app = express();

dbConnect()
.then(()=>console.log('DB is started'))
.catch(err=>{console.log('DB error:', err);   
});

expressConfig(app);
hbsConfig(app);
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
