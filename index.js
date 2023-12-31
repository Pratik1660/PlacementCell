const express= require('express');
const app= express();

const CsvParser= require('json2csv').Parser;
const port= 8000;

const cookieParser= require('cookie-parser');
app.use(express.urlencoded());
app.use(cookieParser());

const db= require('./config/mongoose');


//use express-ejs-layouts
const expresslayouts= require('express-ejs-layouts');
app.use(expresslayouts);

// extract style and script from the sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use(express.static('./assets'));

//use express router
app.use('/', require('./routes'));

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});