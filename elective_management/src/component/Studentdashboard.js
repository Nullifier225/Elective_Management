import React from 'react';
import Card from "react-bootstrap/Card";
// import ReactDOM from "react-dom";
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'


function LoginForm() {
    return (
    <div>
        <div class="col-md-11 offset-md-11">
        <button type="button" class="btn btn-danger">LOGOUT</button>
        </div>
    <div class="header2">
        <h1 className="text-center" class="header2" >Amrita University Elective Management Portal</h1>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div class="contents">
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block ">Apply</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block">Change</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block">Feedback</button>
    <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block">View My Elective</button>
                 
                  
    
    </form>
    
     
    </div>
    </div>
    )
}
export default LoginForm;