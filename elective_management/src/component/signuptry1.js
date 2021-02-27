import React, { Component } from "react";
import logo from './index.png';
import LoginForm from './Signup.js'
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class Login extends Component {
    constructor(){
        super();
   
        this.state = {
            email: "",
            password: "",
    }
     }

     handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
      };
    
  clickBtn = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    let par=/^[abclm][abclm]+.[en][en]+.[up][3-5][a-z][a-z][a-z][1-9][0-9][0-5][0-9][0-9]+@[abclm][abclm]+.students.amrita.edu+$/g; 
    if (!email.match(par)) {
      alert("Please enter a valid email-id");
    }/*
    else{ 
        if(password=="login"){
            window.location.replace('/loginform');
        }
    const user = {
      email,
      password,
    };
    alert("It is a valid email-id");
    console.log(user);
  }*/
  };
    render() {

        return (
             

            

            
            <div class="out">
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
                <br/>
            <form id="myForm" onSubmit={(e)=>submit_signup(e)}>
            

               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Login</h3> 

                <div className="form-group">
                    <label>Roll Number</label>
                    <input type="email" name="email" id="email" onChange={this.handleChange("email")} className="form-control" placeholder="Enter Email ID" value={this.state.email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" id="pwd" onChange={this.handleChange("password")}className="form-control" placeholder="Enter password" value={this.state.password}/>
                </div>

                

                <button type="submit" className="btn btn-info btn-lg btn-block">Sign in</button>
              
                  
                  
              
            </form>
            <br></br>
            
            <div id="data"></div>
            </div>
        );
        function submit_signup(e){
            e.preventDefault();
            let request =  {
                email:document.getElementById('email').value,
                password:document.getElementById('pwd').value,
                
            }
            axios.post('http://localhost:3001/api/signin',request)
            .then(resp=>{
              var details = resp.data;
              
              if(details=='valid')
              {
                
               
               //alert("correct")
                window.location.replace('/loginform');
              }
             
              if(details!='valid')
              {
               // alert("not valid")
                var element
                //console.log("incorrect pwd")
                
                element = <p>Email id or password incorrect</p>
                ReactDOM.render(element, document.getElementById('data'));
              }
            })
            .catch(err=>{
              console.log(err);
            })
        }
    }
}