const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db');

app.use(express.static(path.join(__dirname,'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));

});
app.post('/sign-up',(req,res)=>{
    const ADD_QUERY ="Insert into broker (FirstName, LastName, Email, Password, PhoneNumber) VALUES ('"+req.body.firstName+"','"+req.body.lastName+"','"+req.body.email+"','"+req.body.password+"','"+req.body.phoneNumber+"')";
    connection.query(ADD_QUERY,(err)=>{
        res.redirect('/');
    }); 

});



app.post('/sign-in', (req, res)=> {
	var email = req.body.email;
	var password = req.body.password;
		connection.query('SELECT * FROM broker WHERE Email = ? AND password = ?', [email, password], (err,result) =>{
			if(result){
				res.redirect('/profile');
			}else{
				res.send("Incorrect username and password");
			}
			res.end();
		});	
});

app.listen(3000);
