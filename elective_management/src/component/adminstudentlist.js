import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class adminstudentlist extends Component {
    constructor(){

        super();
   
        
    axios.get('http://localhost:3001/api/getlist1').then(response=>{
    
    
    var details = response.data;
    let element = <ul>
  <li>name:{details.name}</li>    
  <li>rno: {details.rno} </li>
  <li>section: {details.sec} </li>
  <li>preference: {details.pref} </li>
  <li>elective: {details.elective} </li>
  </ul>
  
  ReactDOM.render(element, document.getElementById('data'));
    

   
    
    
    })



  }
    
    
    render() {

        return (
            
            <div class="out">
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
                <br/>
            
            <br></br>
            
           
            <div id="data"></div>
            </div>
        );
        
    
}}
