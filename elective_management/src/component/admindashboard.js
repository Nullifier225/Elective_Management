import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
import logo from './index.png';

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
        <h3 className="text-center" class="header2" style = {{left:"-50px"}} >Amrita University Elective Management Portal</h3>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div >
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " id = "button1"onClick={this.clickbtn1} >View applied students list</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" id = "button2" onClick={this.clickbtn2}>View elective change students</button>
    <br></br>      
    <button type="submit" id = "button3"  className="btn btn-info btn-lg btn-block" onClick={this.clickbtn3}>Send Notifications</button>
    <br></br>      
    <button type="submit" id = "button4"  className="btn btn-info btn-lg btn-block" onClick={this.clickbtn4}>Manage Elective Application</button>
    <br></br>      
    <button type="submit" id = "button3"  className="btn btn-info btn-lg btn-block" onClick={this.clickbtn5}>manage Elective Change Application</button>
                 

                  
    
    </form>
    
    </div>
    </div>
    </div>
    )
}
}
