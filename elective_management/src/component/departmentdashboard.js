import React ,{Component} from 'react';
import Card from "react-bootstrap/Card";
import logo from './index.png';
import {CardList} from "react-bootstrap-icons";
import {PencilSquare} from "react-bootstrap-icons";
import {ClipboardData} from "react-bootstrap-icons";


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
    clickBtn3 = (event) => {
        event.preventDefault();
        window.location.replace('/finallist');
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
