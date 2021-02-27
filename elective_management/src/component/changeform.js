import React, { Component } from "react";
import logo from './index.png';
//import LoginForm from './Signup.js'
export default class ChangeForm extends Component {
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
    }
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
  }
  };
    render() {

        return (
             

            


            <div class="out">
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
                <br/>

            <form>

               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Elective Change Form</h3>


                <div className="form-group">
                    <label>Current Elective Name</label>
                    <input type="text" name="currentelectivename" className="form-control" placeholder="Enter elective name" />
                </div>

                <div className="form-group">
                    <label>Current Elective Course Code</label>
                    <input type="text" name="currentcc" className="form-control" placeholder="Course code"></input>
                </div>

                <div className="form-group">
                    <label>Desired Elective Name</label>
                    <input type="text" name="changeelectivename"  className="form-control" placeholder="Enter elective name" />
                </div>
                
                <div className="form-group">
                    <label>Desired Elective Course Code</label>
                    <input type="text" name="changecc" className="form-control" placeholder="Course code"></input>
                </div>
                

                <button type="submit" onClick={this.clickBtn} className="btn btn-info btn-lg btn-block">Submit</button>
              
                  
              
            </form>
            </div>
        );
    }
}