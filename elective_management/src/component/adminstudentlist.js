import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class adminstudentlist extends Component {
    constructor(){

        super();
   
        this.state = {
            arr:[]
    }
    axios.get('http://localhost:3001/api/getlist1').then(response=>{

    const xy =response.data
    alert(xy)
    
    

    this.setState({arr:xy})
    
    
    })



  }
    
    
    render() {

        return (
            
            <div class="out">
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
                <br/>
            
            <br></br>
            {this.state.arr.map((item,index) => (
                <table style="width:100%">
                <tr>
                <th>{item.name}</th>
                <th>{item.rno}</th>
                <th>{item.sec}</th>
                <th>{item.pref}</th>
                <th>{item.elective}</th>
                </tr>
                </table>
            ))}
            <div id="data"></div>
            </div>
        );
        
    }
}
