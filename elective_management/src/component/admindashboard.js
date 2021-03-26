import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
// import ReactDOM from "react-dom";
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'


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
    render(){
    
    return (
    <div >
        <div class="float-right">
        <button type="button" class="btn btn-danger" onClick={this.clickBtn}>LOGOUT</button>
        </div>
    <div class="header2">
        <h1 className="text-center" class="header2" >Amrita University Elective Management Portal -Admin</h1>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div class="contents"  > 
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " onClick={this.clickbtn1} >View applied students list</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" onClick={this.clickbtn2}>View elective change students</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block">View faculties for electives</button>
              
                 
                  
    
    </form>
    
     
    </div>
    </div>
    )
}
}
