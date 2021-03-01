import React, { Component } from "react";
import logo from './index.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
//import LoginForm from './Signup.js'
export default class StudentForm extends Component {
    constructor(){
        super();
   
        this.state = {
            name: "",
            rollnumber: "",
            section: "",
            electivechoice: "",
    }
     }

     handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
      };
    
  clickBtn = (event) => {
    event.preventDefault();
   console.log(this.state);
  }
  clickBtn1 = (event) => {
    event.preventDefault();
    window.location.replace('/loginform');
  }
    render() {

        return (
             




            <div class="out">
                
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
                <br/>
                <button type="" onClick={this.clickBtn1} className="btn   btn-block"><ArrowLeftCircleFill color="royalblue" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>

            <form>

               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Students Elective Selection</h3>

               <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange("name")} className="form-control" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                    <label>Roll Number</label>
                    <input type="text" name="rollnumber" onChange={this.handleChange("rollnumber")} className="form-control" placeholder="Enter your roll number" />
                </div>

                <div className="form-group">
                    <label>Section</label>
                    <input type="text" name="section" onChange={this.handleChange("section")} className="form-control" placeholder="Enter your section" />
                </div>

                
                
                <div className="form-group">
                    <label>Choice</label>
                    <p>Precedence  1   2  3  4  5  6</p>
                    <label for="male">Digital Image Processing: <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="DIP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="DIP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="DIP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="DIP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="DIP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="DIP" value="DIP"></input></label>


                    <label for="male"> Computer Intelligence: <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CI" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CI" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CI" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CI" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CI" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CI" value="DIP"></input></label>
                    
                    <label for="male">Cryptography: <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CRYPTO" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CRYPTO" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CRYPTO" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CRYPTO" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CRYPTO" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CRYPTO" value="DIP"></input></label>

                    <label for="male">Cloud Computing: <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CC" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CC" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CC" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CC" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CC" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="CC" value="DIP"></input></label>

                    <label for="male">Pattern Recognition: <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="PR" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="PR" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="PR" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="PR" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="PR" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="PR" value="DIP"></input></label>

                    <label for="male"> App Development: <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="DIp" name="APP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="APP" name="APP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="APP" name="APP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="APP" name="APP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="APP" name="APP" value="DIP"></input>
                    <input style={{marginRight: "10px",marginLeft:"0px"}} type="radio" id="APP" name="APP" value="DIP"></input></label>

                </div>
                

                <button type="submit" onClick={this.clickBtn} className="btn btn-info btn-lg btn-block">Submit</button>
              
                  
              
            </form>
            </div>
        );
    }
}