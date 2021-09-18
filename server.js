const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require ('./models/User')

//middleware
const postsRoute = require('./routes/posts');
app.use ('/',postsRoute);

app.use(bodyParser.json());



//creating a route
app.get('/',(req,res)=>{
    res.send('we are on home');
})
//connecting to database
mongoose.connect('mongodb+srv://ola:saynomore@neeyrahsproject.1j4vp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
err => {
    if(err) throw err
    else console.log('Database is connected')
})
//listening to server on port 3000
app.listen(3000, () => {
    console.log("Server is on port 3000");
  });
