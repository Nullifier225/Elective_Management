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
    var i=0
    let x1=JSON.parse(JSON.stringify(details[i].content[0]))
    let x2=JSON.parse(JSON.stringify(details[i].content[1]))
    let x3=JSON.parse(JSON.stringify(details[i].content[2]))
    let x4=JSON.parse(JSON.stringify(details[i].content[3]))
    let x5=JSON.parse(JSON.stringify(details[i].content[4]))
    alert(x1)
      
    element=<table>
    <tr>
    <th>Name</th>
    <th>Roll.no</th>
    <th>section</th>
    <th>Preference number</th>
    <th>Elective</th>
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

  


  /*element=<div class="table-data">
  
    
    */
  //alert(JSON.stringify(element))
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
