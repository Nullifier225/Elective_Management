import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import { Rating } from 'material-ui-rating'
import { IconButton } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'; 
export default class Feedbackform extends Component {
    
    
  clickBtn = (event) => {
    event.preventDefault();
    
  };
  clickBtn1 = (event) => {
    event.preventDefault();
    window.location.replace('/loginform');
  }
 
  constructor(){
      super()
  }
    render() {

        return (
            <div class="out0">
                        <button type="" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>

            
            <div class="out" style={{height:"1050px" ,width:"auto",top:"5%"}}>
                
                <img src={logo} className="rounded mx-auto d-block" style={{height:'auto',width:'auto'}}/>
                <br/>
                <br/>
            <form id="myForm" >
            
               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Feedback Form</h3> 

                <div className="form-group">
                    <label>Roll Number</label>
                    <input type="text" name="text" id="Rollno"  className="form-control" placeholder="Enter Email ID" />
                </div>

                <div className="form-group">
                    <label>Elective Name</label>
                    <input type="text" name="text" id="electivename" className="form-control" placeholder="Enter password" />
                </div>

                <br></br>
                <p>Rating</p>
                <div class="form-group" className="float-left ">
                <span class="starRating">
                <input id="rating5" type="radio" name="rating" value="5"/>
                <label for="rating5">5</label>
                <input id="rating4" type="radio" name="rating" value="4"/>
                <label for="rating4">4</label>
                <input id="rating3" type="radio" name="rating" value="3"/>
                <label for="rating3">3</label>
                <input id="rating2" type="radio" name="rating" value="2"/>
                <label for="rating2">2</label>
                <input id="rating1" type="radio" name="rating" value="1"/>
                <label for="rating1">1</label>
                </span>
                </div>

                <br></br>
                <br></br>

                <div className="form-group">
                <label>Course Feedback</label>
                <br/>
                <textarea id="desc"   required name="desc"  rows="5" cols="50"></textarea>
                </div>

                <div className="form-group">
                <label> Recommended courses for the future </label>
                <textarea id="desc"   required name="desc"  rows="5" cols="50"></textarea>
                </div>


                <button type="submit" onClick={this.clickBtn} className="btn btn-info btn-lg btn-block">Submit</button>
              
                  
            </form>
            <br></br>
            
            
            </div>
            </div>
        );
    }
}