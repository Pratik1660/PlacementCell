const mongoose = require('mongoose');

const db= mongoose.connect('mongodb://127.0.0.1:27017',
{dbName: 'placementcelldata'})
.then(()=> { console.log('Database connected')})
.catch((e)=>{console.log(e)});

module.exports= db;