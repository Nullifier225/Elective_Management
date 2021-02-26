import React, { Component } from "react";
import logo from './index.png';
//import LoginForm from './Signup.js'
export default class DeptForm extends Component {
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

               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Department Elective List</h3>

               <div className="form-group">
                    <label>Department</label>
                    <select name="department" value="department"><option value="CSE">CSE</option>
    <option value="ECE"></option></select>
                </div>

                <div className="form-group">
                    <label>Elective name</label>
                    <input type="text" name="electivename" onChange={this.handleChange("electivename")} className="form-control" placeholder="Enter elective name" />
                </div>

                <div className="form-group">
                    <label>Maximum no.of students</label>
                    <input type="number" id="max" name="max" step="10"></input>
                </div>

                <div className="form-group">
                    <label>Minimum no.of students</label>
                    <input type="number" id="min" name="min" step="5"></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea id="desc" name="desc" rows="4" cols="50"></textarea>
                </div>

                <div className="form-group">
                    <label>Course mentor</label>
                    <input type="text" name="cm"/>
                </div>
                

                <button type="submit" onClick={this.clickBtn} className="btn btn-info btn-lg btn-block">Submit</button>
              
                  
              
            </form>
            </div>
        );
    }
}