import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
export default class viewelectivechange extends Component {
   clickBtn1 = (event) => {
    event.preventDefault();
    this.props.history.push('/admindashboard');
    }
    clickbtn=(event)=>{
      let req={
        dept:document.getElementById("select1").value,
        year:document.getElementById("select2").value
      }
      
      axios.post('https://auems2.herokuapp.com/api/getlist2',req).then(response=>{
    
    
    var details = response.data;
    var element;
    if (details.length>0){
    element=<table class="table table-bordered ">
    <tr class="table-primary">
    <th>Email</th>
    <th>Current elective</th>
    <th>current elective course code</th>
    <th>New elective</th>
    <th>New Elective course code</th>
    </tr>
    {details.map((item) => (<tr>
      
      <td>{JSON.parse(JSON.stringify(item.content[0]))}</td>
      <td>{JSON.parse(JSON.stringify(item.content[1]))}</td>
      <td>{JSON.parse(JSON.stringify(item.content[2]))}</td>
      <td>{JSON.parse(JSON.stringify(item.content[3]))}</td>
      <td>{JSON.parse(JSON.stringify(item.content[4]))}</td>
      
      </tr>

    ))}
    </table>
    
  ReactDOM.render(element, document.getElementById('data'));
    }
    else{
      element=<h5 class="text-center font-weight-bold"><i>No applications Yet</i></h5>
      ReactDOM.render(element, document.getElementById('data'));
    }

   
    
    
    })
    }
    constructor(){

        super();
        document.title="Elective change applications"
        
    



  }
  
    
    
    render() {

      return (
          
            
        <div class="out222">
          
            <img class="img12"src="https://image3.mouthshut.com/images/Restaurant/Photo/-73020_62102.jpg"></img>
          
          
          
          <div class="out" style={{height:"auto", width:"750px"}} >
          <button type="Submit" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
          <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
              <br/>
              <br/>
              <h4 className="text-center font-weight-bold font-size:1.5em" class="heading1">View Elective Change Applications</h4>
          <br></br>
          <div className="form-group" style={{display:"flex"}}>
            <div style={{display:"block"}}>
                          <label>Department</label>
                          <br/>
                          <select required defaultValue={'DEFAULT'} name="text" id="select1" onChange={this.handleChange}>
                              <option value="DEFAULT" disabled>Choose department</option>
                              <option value="CSE">CSE</option>
                              <option value="ECE">ECE</option>
                             
                          </select>
                          <br/>
                          <br/>
                          </div>
                          <div style={{display:"block",paddingLeft:"10px"}}>
                          <label>Year</label>
                          <br/>
                          
                          <select defaultValue={'DEFAULT'} name="text" id="select2" onChange={this.handleChange}>
                          <option value="DEFAULT" disabled>Choose year</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                             
                          </select>
                          </div>
                      
                      
                      <div style={{display:"block",paddingLeft:"30%",paddingTop:"2%"}}>
                      
                      <button  className="btn btn-info btn-lg " type="submit" onClick={this.clickbtn}>View List
                      </button>
                      </div>
                      </div>
          <div id="data"></div>
          </div>
          </div>
          
          
          
          
      );
        
    
}}
