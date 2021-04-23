const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db');

app.use(express.static(path.join(__dirname,'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));

});
app.post('/sign-up',(req,res)=>{
    const ADD_QUERY ="Insert into broker (FirstName, LastName, Email, Password, PhoneNumber) VALUES ('"+req.body.firstName+"','"+req.body.lastName+"','"+req.body.email+"','"+req.body.password+"','"+req.body.phoneNumber+"')"
    connection.query(ADD_QUERY,(err)=>{
        if(err) console.log(err);
    })

    res.send("<h1>Thanks for Signing up</h1>");
})
app.listen(3000);