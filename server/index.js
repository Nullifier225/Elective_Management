const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
process.on('uncaughtException', function (error) {
    console.log(error.stack);
 });
var router = express.Router()

var url = require('url');
const { nextTick } = require('process');

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
     

    db.getConnection(function(err) {
        
        
        //console.log("connected")
        db.query("SELECT ls_pass FROM student_login_details where ls_usern=? AND ls_pass=?",[emailid,password], function (err,result) {
           
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
      
      app.post("/api/changeform",(req,res)=>{
        //console.log("1")
        const cename = req.body.cename;
        const cecoursecode=req.body.cecoursecode;
        const dename=req.body.dename;
        const decoursecode=req.body.decoursecode;
        
        db.getConnection(function(err) {
            
            
            //console.log("connected")
            db.query("insert into electivechange values(?,?,?,?,?)",[emailid,cename,cecoursecode,dename,decoursecode], function (err,result) {
               
                if(err) 
                {
                    res.send('invalid')
                   
                    res.end()
                    return next(err)
                }
                res.send('valid')
                    res.end()
               
                  
               
           });
          });
         
        
    })
    app.get("/api/getele",(req,res)=>{
        
        db.getConnection(function(err) {
        
        
            
            
            
            
            db.query("SELECT electivename FROM dept_elective ", function (err,result) {
               
                if(err) 
                {
                    res.send("error")
                   
                    res.end()
                    return next(err)
                }
                let x=[]
                let n=result.length
                for(let i=0;i<n;i++){
                let vals=JSON.parse(JSON.stringify(result))[i]
                let xn=Object.values(vals)
                let state={
                    id:i+1,
                    content:xn[0]                
                }
                x.push(state)
                }
                
                res.send(x)
                    res.end()
               
                  
               
           });
        }  
          );
         
        
    })
    
     
    
})
app.post("/api/deptformcol",(req,res)=>{
    //console.log("1")
    //const  array= req.body.array1;
    const elective=req.body.array1;
    //console.log("array element",elective);
    let n=elective.length;
    
       // console.log(vals);}
    db.getConnection(function(err) {
    
    
        console.log("connected")
        
        
        for(let i =0;i<n;i++){
            let vals=Object.values(elective[i]);
        db.query("insert into dept_elective(department,electivename,coursecode,courseyear,max,min,descr,cm) values(?,?,?,?,?,?,?,?)",vals, function (err,result) {
           
            if(err) 
            {
                res.send('invalid')
               
                res.end()
                return next(err)
            }
            res.send('valid')
                res.end()
           
              
           
       });
    }  
      });
     
    





})

});


app.post("/api/studentformcol",(req,res)=>{
    //console.log("1")
    //const  array= req.body.array1;
    const name=req.body.name;
    const rno=req.body.rno;
    const sec=req.body.sec;
    const pref=req.body.pref;
    console.log("array element",pref);
    let n=pref.length;
    
       // console.log(vals);}
    db.getConnection(function(err) {
    
    
        console.log("connected")
        
        let refs="valid"
        for(let i =0;i<n;i++){
            let vals=Object.values(pref[i]);
            
            console.log(vals)
        db.query("insert into student_elective values(?,?,?,?,?)",[name,rno,sec,i+1,vals[1]], function (err,result) {
           
            if(err) 
            {
            refs="invalid"
            }
           
              
           
       });
    }  
    res.send(refs)
    res.end()
      });
     
    
});
app.get("/api/getlist1",(req,res)=>{
        
    db.getConnection(function(err) {    
        
        db.query("SELECT * FROM student_elective ", function (err,result) {

           
            if(err) 
            {
                res.send("error")
               
                res.end()
                return next(err)
            }
            let x=[]
            let n=result.length
            for(let i=0;i<n;i++){
            let vals=JSON.parse(JSON.stringify(result))[i]
            let xn=Object.values(vals)
            let state={
                id:i+1,
                content:xn}
            x.push(state)
            }
        
            res.send(JSON.stringify(x))
            res.end()
           
       });
    }  
      );
     
    
})

app.get("/api/getlist2",(req,res)=>{
        
    db.getConnection(function(err) {    
        
        db.query("SELECT * FROM electivechange ", function (err,result) {

           
            if(err) 
            {
                res.send("error")
               
                res.end()
                return next(err)
            }
            let x=[]
            let n=result.length
            for(let i=0;i<n;i++){
            let vals=JSON.parse(JSON.stringify(result))[i]
            let xn=Object.values(vals)
            let state={
                id:i+1,
                content:xn}
            x.push(state)
            }
        
            res.send(JSON.stringify(x))
            res.end()
           
       });
    }  
      );
     
    
})

app.listen(3001,()=>{
    console.log('running on port 3001');
})