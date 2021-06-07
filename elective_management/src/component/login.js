import React, { Component } from "react";
import { PropTypes } from 'react'
import logo from './index.png';
import LoginForm from './Signup.js'
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BoxArrowInRight} from "react-bootstrap-icons"
import {setUserSession} from "./common"
import { setMaxListeners } from "process";

export default class Login extends Component {
    constructor(props){
        super(props);
        document.title="Login"
        this.state = {
            email: "",
            password: ""
    };
    //this.handleSuccessfulAuth=this.handleSuccessfulAuth.bind(this);
    this.handlesubmit_signup=this.handlesubmit_signup.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  //handleSuccessfulAuth(data,path){
      //this.props.handleLogin(data);
      //this.props.history.push(path);
    //}

     handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
      };
    
  clickBtn = (event) => {
    event.preventDefault();
    
  };

  handlesubmit_signup = (e) =>{
    e.preventDefault();
      let request =  {
          email:document.getElementById('email').value,
          password:document.getElementById('pwd').value,
          
      }
      axios.post('http://localhost:3001/api/signin',request)
      .then(resp=>{
        var details = resp.data;
        const {email,password}=this.state;
        if(details=="valid")
        {
          //alert(sessionStorage.getItem('user'));
          let par1=/^[abclm][abclm].[en][en].[up][3-5][a-z][a-z][a-z][1-9][0-9][0-5][0-9][0-9]@[abclm][abclm].students.amrita.edu$/g;
          let par2=/^[a-zA-Z0-9_.][a-zA-Z0-9_.]+@[abclm][abclm].amrita.edu$/g;
          let par3=/^[a-zA-Z0-9_.][a-zA-Z0-9_.]+@[abclm][abclm].admin.amrita.edu$/g;  

          if (email.match(par1)) {
            //alert(auth.authenticated)
            //alert(this.props.isLoggedin)
            //this.handleSuccessfulAuth(resp.data,'/loginform')
            setUserSession(resp.data.token,resp.data.emailid,"stud");
            this.props.history.push('/loginform');
            
          }
          if (email.match(par2)) {
            setUserSession(resp.data.token,resp.data.emailid,"dept");
            this.props.history.push('/deptdashboard');
          }
          if (email.match(par3)) {
            setUserSession(resp.data.token,resp.data.emailid,"admin");
            this.props.history.push('/admindashboard');
          }
          
         
          
        }
       
        if(details!="valid")
        {
          var element
          element = <h5 className="text-center font-weight-bold " id="fail" style={{color:"#ff5522"}}><i>Email id or password incorrect</i></h5>
          ReactDOM.render(element, document.getElementById('data'));
        }
      })
      .catch(err=>{
        console.log(err);
      });
      
    };
    render() {

        return (
             

            <div class="out1">
              <img class="img1"src="https://image3.mouthshut.com/images/Restaurant/Photo/-73020_62102.jpg"></img>

            <div class="out" style={{height:"auto"}}>
                <img src={logo} id="Amrita" className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
            <form id="myForm" onSubmit={(e)=>this.handlesubmit_signup(e)}>
            

               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Login</h3> 
               <br/>
                <div className="form-group">
                    <label>Email ID</label>
                    <input type="email" name="email" id="email" onChange={this.handleChange("email")} className="form-control" placeholder="Enter Email ID" value={this.state.email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" id="pwd" onChange={this.handleChange("password")}className="form-control" placeholder="Enter password" value={this.state.password}/>
                </div>

                

                <button type="submit" id="Button"className="btn btn-info btn-lg btn-block" value="Sign in">Sign In <BoxArrowInRight color="white" class="hover:bg-gray-100" size={30}></BoxArrowInRight>
</button>
              
                  
                  
              
            </form>
            <br></br>
            
            <div id="data"></div>
            </div>
            </div>
        );
        
            
        }
      }