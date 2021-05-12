import React,{ Component }  from 'react';
import logo from './index.png';
import ReactDOM from 'react-dom'
import axios from 'axios';
import {BorderStyle, PencilSquare} from "react-bootstrap-icons";
import {CardList} from "react-bootstrap-icons"
import {ArrowRepeat} from 'react-bootstrap-icons';
import {Star} from 'react-bootstrap-icons';




export default class LoginForm extends Component {
    
        
    constructor(){
        super()
        let n1 = new Date()
           
        
        
        axios.get('http://localhost:3001/api/getname').then(response=>{
    
    
    var details = response.data;
    var element;
    
    element=<h5 class="float-right mr-50">
        Welcome, {JSON.parse(JSON.stringify(details))}!

    </h5>
    ReactDOM.render(element, document.getElementById('data1'));
    var element1
    let n1 = new Date()
            if((n1.getMonth()>=4) && (n1.getDate()>10 || (n1.getDate()==10 && n1.getHours()>=15))){
                element1=<button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button5"  onClick={this.clickBtn5}><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>                &nbsp; &nbsp; Tentative List</button>
                
                if((n1.getMonth()>=4) && (n1.getDate()>10 || (n1.getDate()==10 && n1.getHours()>=16))){
                    element1=<button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button5"  onClick={this.clickBtn5}><CardList color="white" class="hover:bg-gray-100" size={30}></CardList>                    &nbsp; &nbsp; View Final List</button>

                    
                }
            
                
            }
            ReactDOM.render(element1,document.getElementById("data"));
    }
    )}
    clickBtn = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/logout');
        window.location.replace('/');
    };
    clickBtn1 = (event) => {
        event.preventDefault();
        let n1 = new Date()
        if((n1.getMonth()>=4) && (n1.getDate()>10 || (n1.getDate()==10 && n1.getHours()>=15)) && ((n1.getMonth()<=4) && (n1.getDate()<11 || (n1.getDate()==11 && n1.getHours()>=15)))){
            window.location.replace('/studentsform');
        }
        else{
            window.location.replace('/error');
        }

    };
    clickBtn2 = (event) => {
        event.preventDefault();
        let n1 = new Date()
        if(((n1.getMonth()>=4) && (n1.getDate()>10 || (n1.getDate()==10 && n1.getHours()>=15)))&&((n1.getMonth()<=4) && (n1.getDate()<12 || (n1.getDate()==12 && n1.getHours()>=15)))){
            window.location.replace('/changeform');
        }
        else{
            window.location.replace('/error');
        }
    }
    clickBtn3 = (event) => {
        event.preventDefault();
        window.location.replace('/feedbackforms');
    }

    clickBtn5 = (event) => {
        event.preventDefault();
        window.location.replace('/tentativelist');
    }

    

    render(){

        
        

    

    return (
    <div >
        <div style={{fontFamily: 'Raleway',height:"38px",width:"auto"}}>
        
        <button type="submit" class="btn btn-danger float-right" id = "Button0" onClick={this.clickBtn} >LOGOUT</button>
        <div id="data1" ></div>
        </div>
    

    <div className="out4" >

    <div >
        <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
        <br></br>
        <h3 class="text-center font-weight-bold font-size:1.5em" >Amrita University Elective Management Portal</h3>
        <br></br>
        <br></br>
        
        </div> 
       
   <div >

    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " id ="Button1"  onClick={this.clickBtn1}><PencilSquare color="white" class="hover:bg-gray-100" size={30}></PencilSquare>&nbsp; &nbsp; Apply</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button2" onClick={this.clickBtn2}><ArrowRepeat color="white" class="hover:bg-gray-100" size={30}></ArrowRepeat>&nbsp; &nbsp; Change</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button3" onClick={this.clickBtn3}><Star color="white" class="hover:bg-gray-100" size={30}></Star>&nbsp; &nbsp; Feedback</button>
    <br></br>      
    <div id="data"></div>
    
        
                  
    
    </form>
    </div>
    </div>
    </div>
    
    )
}


}

