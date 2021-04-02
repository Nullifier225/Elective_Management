import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";


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
        <button type="button" class="btn btn-danger" id ="Button0" onClick={this.clickBtn}>LOGOUT</button>
        </div>
    <div class="header2">
        <h1 className="text-center" class="header2" >Amrita University Elective Management Portal -Department</h1>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div class="contents">
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " id="Button1" onClick={this.clickBtn1}>Provide list</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" id="Button2" >View final student list</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" id="Button3" >Feedback</button>
              
                 
                  
    
    </form>
    
     
    </div>
    </div>
    )
}
}
