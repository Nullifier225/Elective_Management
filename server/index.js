const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

var router = express.Router()

var url = require('url');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"electivedb"
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("/api/signin",(req,res)=>{
    //console.log("1")
    const emailid = req.body.email;
    const password=req.body.password;
    console.log(emailid);
    console.log(password);    

    db.getConnection(function(err) {
        console.log("B")
        console.log(emailid);
        console.log(password); 
        
        //console.log("connected")
        db.query("SELECT ls_pass FROM student_login_details where ls_usern=? AND ls_pass=?",[emailid,password], function (err,result) {
            console.log("A")
            console.log(emailid);
            console.log(password); 
            console.log(err);
            console.log(result);
           if(result.length>0)
            {
                //console.log("match")
                res.send('valid')
                res.end()
            }
          else{
                res.send("mismatch")
            } 
            if(err){
                print("retrievel error")
            }
            
       });
      });
     
    
})

app.listen(3001,()=>{
    console.log('running on port 3001');
})