import React,{ Component }  from 'react';
import logo from './index.png';
import axios from 'axios';

export default class LoginForm extends Component {
    clickBtn = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/logout');
        window.location.replace('/');
    };
    clickBtn1 = (event) => {
        event.preventDefault();
        window.location.replace('/studentsform');

    };
    clickBtn2 = (event) => {
        event.preventDefault();
        window.location.replace('/changeform');
    }
    clickBtn3 = (event) => {
        event.preventDefault();
        window.location.replace('/feedbackforms');
    }
    render(){

        
        

    

    return (
        
    <div>
        <div class="float-right">
        <button type="submit" class="btn btn-danger" id = "Button0" onClick={this.clickBtn} >LOGOUT</button>
         
        </div>
    <div className="out4">
    <div >
        <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
        <h3 class="header3" >Amrita University Elective Management Portal</h3>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div >
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " id ="Button1" onClick={this.clickBtn1}>Apply</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button2" onClick={this.clickBtn2}>Change</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button3" onClick={this.clickBtn3}>Feedback</button>
    <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button4" >View My Elective</button>
                 
                  
    
    </form>
    
    </div>
    </div>
    </div>
    )
}
}
