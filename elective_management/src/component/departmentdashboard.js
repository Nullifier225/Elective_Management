import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
import logo from './index.png';


export default class TD  extends Component{
    clickBtn = (event) => {
        event.preventDefault();
        window.location.replace('/');
    };
    clickBtn1 = (event) => {
        event.preventDefault();
        window.location.replace('/departmentform');
    };
    clickBtn2 = (event) => {
        event.preventDefault();
        window.location.replace('/viewfeedbacks');
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
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " id="Button1" onClick={this.clickBtn1}>Provide list</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" id="Button2" >View final student list</button>
    <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" id="Button3" onClick={this.clickBtn2} >Feedback</button>
                 
                  
    
    </form>
    
    </div>
    </div>
    </div>
    )
}
}
