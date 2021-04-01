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
    
  };
    render() {

        return (
             

            

            <div class="out1">
              <img class="img1"src="https://image3.mouthshut.com/images/Restaurant/Photo/-73020_62102.jpg"></img>

            <div class="out">
                <img src={logo} id="Amrita" className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
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

                

                <button type="submit" id="Button"className="btn btn-info btn-lg btn-block" value="Sign in">Sign in</button>
              
                  
                  
              
            </form>
            <br></br>
            
            <div id="data"></div>
            </div>
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
                const email=document.getElementById('email').value;
                let par1=/^[abclm][abclm].[en][en].[up][3-5][a-z][a-z][a-z][1-9][0-9][0-5][0-9][0-9]@[abclm][abclm].students.amrita.edu$/g;
                let par2=/^[a-zA-Z0-9_.][a-zA-Z0-9_.]+@[abclm][abclm].amrita.edu$/g;
                let par3=/^[a-zA-Z0-9_.][a-zA-Z0-9_.]+@[abclm][abclm].admin.amrita.edu$/g;    
                if (email.match(par1)) {
                  window.location.replace('/loginform');
                }
                if (email.match(par2)) {
                  window.location.replace('/deptdashboard');
                }
                if (email.match(par3)) {
                  window.location.replace('/admindashboard');
                }
                
               
                
              }
             
              if(details!='valid')
              {
                var element
                
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