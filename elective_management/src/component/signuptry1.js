import React, { Component } from "react";
import logo from './index.png';
export default class Login extends Component {
    render() {

        return (
             

            


            <div class="out">
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
                <br/>

            <form>

               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Login</h3> 

                <div className="form-group">
                    <label>Roll Number</label>
                    <input type="email" className="form-control" placeholder="Enter Roll No" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                

                <button type="submit" className="btn btn-info btn-lg btn-block">Sign in</button>
              
                  
              
            </form>
            </div>
        );
    }
}