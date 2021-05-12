import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
import logo from './index.png';
import {CardList} from "react-bootstrap-icons"
import {Envelope} from "react-bootstrap-icons"
import {Gear} from "react-bootstrap-icons"


export default class AD  extends Component{
    clickBtn = (event) => {
        event.preventDefault();
        window.location.replace('/');
    };
    clickbtn1 = (event) => {
        event.preventDefault();
        window.location.replace('/adminstudentlist');
    };
    clickbtn2 = (event) => {
        event.preventDefault();
        window.location.replace('/viewelectivechange');
    };
    clickbtn3 = (event) => {
        event.preventDefault();
        window.location.replace('/sendmail');
    };
    clickbtn4 = (event) => {
        event.preventDefault();
        window.location.replace('/management');
    };
    clickbtn5 = (event) => {
        event.preventDefault();
        window.location.replace('/electivechangemanagement');
    };
    render(){
    
    return (
        <div>
        <div class="float-right">
        <button type="submit" class="btn btn-danger" id = "Button0" onClick={this.clickBtn} >LOGOUT</button>
         
        </div>
        <div id="data"></div>
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
        
    <button type="submit"  className="btn btn-info btn-lg btn-block text-left" id = "button1"onClick={this.clickbtn1} ><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>&nbsp; &nbsp; View applied students list </button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block text-left" id = "button2" onClick={this.clickbtn2}><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>&nbsp; &nbsp; View elective change students</button>
    <br></br>      
    <button type="submit" id = "button3"  className="btn btn-info btn-lg btn-block text-left" onClick={this.clickbtn3}><Envelope color="white" class="hover:bg-gray-100" size={30}></Envelope> &nbsp; &nbsp; Send Notifications</button>
    <br></br>      
    <button type="submit" id = "button4"  className="btn btn-info btn-lg btn-block text-left" onClick={this.clickbtn4}><Gear color="white" class="hover:bg-gray-100" size={30}></Gear> &nbsp; &nbsp; Manage Elective Application</button>
    <br></br>      
    <button type="submit" id = "button3"  className="btn btn-info btn-lg btn-block text-left" onClick={this.clickbtn5}><Gear color="white" class="hover:bg-gray-100" size={30}></Gear> &nbsp; &nbsp; Manage Elective Change Application</button>
                 

                  
    
    </form>
    
    </div>
    </div>
    </div>
    )
}
}
