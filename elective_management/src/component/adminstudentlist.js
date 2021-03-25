import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class adminstudentlist extends Component {
    constructor(){

        super();
   
        
    axios.get('http://localhost:3001/api/getlist1').then(response=>{
    
    
    var details = response.data;
    var element;
    alert(details)
    for(let i=0;i<response.data.length;i++){
    let x1=JSON.parse(JSON.stringify(details[i].content[0]))
    let x2=JSON.parse(JSON.stringify(details[i].content[1]))
    let x3=JSON.parse(JSON.stringify(details[i].content[2]))
    let x4=JSON.parse(JSON.stringify(details[i].content[3]))
    let x5=JSON.parse(JSON.stringify(details[i].content[4]))
    alert(x1)
      var li=ReactDOM.render(li,document.createElement("li"));
      var text=ReactDOM.render(text,document.createTextNode(x1));
      ReactDOM.render(li.appendChild(text));
      ReactDOM.render(document.getElementById("data").appendChild(li));
    
    /*element=<ul>
  <li>name:{x1}</li>   
  <li>rno:{x2}</li>
  <li>section:{x3}</li>
  <li>preference:{x4}</li>
  <li>elective:{x5}</li>
  </ul>*/
    
    }
  alert(JSON.stringify(element))
  //ReactDOM.render(element, document.getElementById('data'));
    

   
    
    
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
