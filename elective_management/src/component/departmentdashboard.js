import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
// import ReactDOM from "react-dom";
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'


export default class TD  extends Component{
    clickBtn = (event) => {
        event.preventDefault();
        window.location.replace('/');
    };
    clickBtn1 = (event) => {
        event.preventDefault();
        window.location.replace('/departmentform');
    };
    render(){
    
    return (
    <div>
        <div class="col-md-11 offset-md-11">
        <button type="button" class="btn btn-danger" onClick={this.clickBtn}>LOGOUT</button>
        </div>
    <div class="header2">
        <h1 className="text-center" class="header2" >Amrita University Elective Management Portal -Department</h1>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div class="contents">
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block "onClick={this.clickBtn1}>Provide list</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block">View final student list</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block">Feedback</button>
              
                 
                  
    
    </form>
    
     
    </div>
    </div>
    )
}
}
