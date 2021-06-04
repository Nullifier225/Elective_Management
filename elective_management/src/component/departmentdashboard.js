import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
import logo from './index.png';
import {CardList} from "react-bootstrap-icons";
import {PencilSquare} from "react-bootstrap-icons";
import {ClipboardData} from "react-bootstrap-icons";
import {List,PersonCircle} from 'react-bootstrap-icons';
import {InfoCircle} from 'react-bootstrap-icons';
import { DoorOpenFill } from 'react-bootstrap-icons';
import axios from 'axios';
import { removeUserSession } from './common';
export default class TD  extends Component{
    clickBtn = (event) => {
        event.preventDefault();
        removeUserSession();
        this.props.history.push("/");
    };
    clickBtn1 = (event) => {
        event.preventDefault();
        this.props.history.push('/departmentform');
    };
    clickBtn2 = (event) => {
        event.preventDefault();
        this.props.history.push('/viewfeedbacks');
    };
    clickBtn3 = (event) => {
        event.preventDefault();
        this.props.history.push('/finallist');
    };
    clickBtn0 = (event) => {
        event.preventDefault();
        window.open('http://localhost:3000/printpage','_blank')
    }

    constructor(){
        super()
        document.title="Department Dashboard"
    }

    render(){
    
    return (
        <div>
        <div class="dropdown" id="dropdown" style={{fontFamily: 'Raleway'}}>
        <List color="black" class="dropbtn float-right" size={30}></List>
        <br></br>
        <br></br>
        <div class="dropdown-content" id="dropdowncontent" style={{backgroundColor: "#ccddff", fontFamily: 'Raleway', height:"auto",right:"5%",borderRadius:"16px"}}>
        <br></br>
        <div class="center" style={{paddingLeft:"45%"}}>
        <PersonCircle color="black" size={30}></PersonCircle>
        <br></br>
        <br></br>
        </div>
        <div id="data1" style={{width:"195px",height:"auto",paddingLeft: "30%"}}><h5>Welcome<br/></h5></div>
        <br></br>
        <div class="center" style={{paddingLeft:"45%"}}>
        <InfoCircle color="#ff8c1a" id="aboutus" onClick={this.clickBtn0} size={30}></InfoCircle>
        <br></br>
        <br></br>
        <DoorOpenFill color="red" id="logout" onClick={this.clickBtn} size={30}></DoorOpenFill>
        <br></br>
        <br></br>

        </div>
        </div>
    </div>
    <div className="out4">
    <div >
        <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
        <br></br>
        <h3 className="text-center" class="text-center font-weight-bold font-size:1.5em" style = {{left:"-50px"}} >Amrita University Elective Management Portal</h3>
        <br></br>
        <br></br>
        </div> 
       
   <div >
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " id="Button1" onClick={this.clickBtn1}><PencilSquare color="white" class="hover:bg-gray-100" size={30}></PencilSquare>&nbsp; &nbsp; Provide list</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" id="Button2" onClick={this.clickBtn3}><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>&nbsp; &nbsp; View final student list</button>
    <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" id="Button3" onClick={this.clickBtn2} ><ClipboardData color="white" class="hover:bg-gray-100" size={30}></ClipboardData>&nbsp; &nbsp; Feedback Report</button>
                 
                  
    
    </form>
    
    </div>
    </div>
    </div>
    )
}
}
