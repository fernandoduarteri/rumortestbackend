const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors')

//CORS

app.use(cors());

//PUBLIC DIRECTORY
app.use(express.static('public'));

//BODY PARSER
app.use(express.json());

//ROUTES
app.use('/api/search', require('./routes/search'));



app.listen(process.env.PORT,()=>{
    console.log(`SERVER RUNNING ON PORT: ${ process.env.PORT}`);
});