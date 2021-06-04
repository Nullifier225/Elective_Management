import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
import logo from './index.png';
import {CardList} from "react-bootstrap-icons"
import {Envelope} from "react-bootstrap-icons"
import {Gear} from "react-bootstrap-icons"
import {List,PersonCircle} from 'react-bootstrap-icons';
import {InfoCircle} from 'react-bootstrap-icons';
import { DoorOpenFill } from 'react-bootstrap-icons';
import { removeUserSession } from './common';

export default class AD  extends Component{
    clickBtn = (event) => {
        event.preventDefault();
        removeUserSession();
        this.props.history.push("/");
    };
    clickbtn1 = (event) => {
        event.preventDefault();
        this.props.history.push('/adminstudentlist');
    };
    clickbtn2 = (event) => {
        event.preventDefault();
        this.props.history.push('/viewelectivechange');
    };
    clickbtn3 = (event) => {
        event.preventDefault();
        this.props.history.push('/sendmail');
    };
    clickbtn4 = (event) => {
        event.preventDefault();
        this.props.history.push('/management');
    };
    clickbtn5 = (event) => {
        event.preventDefault();
        this.props.history.push('/electivechangemanagement');
    };
    clickBtn6 = (event) => {
        event.preventDefault();
        this.props.history.push('/afinallist');
    };
    clickBtn0 = (event) => {
        event.preventDefault();
        window.open('http://localhost:3000/printpage','_blank')
    }
    constructor(){
        super()
        document.title="Admin Dashboard"
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
        <div id="data1" style={{width:"195px",height:"auto",paddingLeft: "30%"}}><h5>Welcome<br/>Admin!</h5></div>
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
    <div className="out4" style={{height:"800px"}}>
    

    <div >
        <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
        <br></br>
        <h3 className="text-center" class="text-center font-weight-bold font-size:1.5em" style = {{left:"-50px"}} >Amrita University Elective Management Portal</h3>
        <br></br>
        <br></br>
        </div> 
       
   <div >
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block text-left" id = "button1"onClick={this.clickbtn1} ><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>&nbsp; &nbsp; View applied students list </button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block text-left" id = "button2" onClick={this.clickbtn2}><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>&nbsp; &nbsp; View elective change students</button>
    <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block text-left" id="Button6" onClick={this.clickBtn6}><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>&nbsp; &nbsp; View final student list</button>
    <br></br>
    <button type="submit" id = "button3"  className="btn btn-info btn-lg btn-block text-left" onClick={this.clickbtn3}><Envelope color="white" class="hover:bg-gray-100" size={30}></Envelope> &nbsp; &nbsp; Send Notifications</button>
    <br></br>      
    <button type="submit" id = "button4"  className="btn btn-info btn-lg btn-block text-left" onClick={this.clickbtn4}><Gear color="white" class="hover:bg-gray-100" size={30}></Gear> &nbsp; &nbsp; Manage Elective Application</button>
    <br></br>      
    <button type="submit" id = "button5"  className="btn btn-info btn-lg btn-block text-left" onClick={this.clickbtn5}><Gear color="white" class="hover:bg-gray-100" size={30}></Gear> &nbsp; &nbsp; Manage Elective Change Application</button>
                 

                  
    
    </form>
    
    </div>
    </div>
    </div>
    )
}
}
