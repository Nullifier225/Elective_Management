import React,{ Component }  from 'react';
import logo from './index.png';
import ReactDOM from 'react-dom'
import axios from 'axios';
// function modify (){
//     let n1 = new Date()
//     if((n1.getMonth()>=4) && (n1.getDate()>=10) && (n1.getHours()>=14) && (n1.getMinutes()>=0)){
//         document.getElementById("Button5").style.display="block"
//         if((n1.getMonth()>=4) && (n1.getDate()>=10) && (n1.getHours()>=14) && (n1.getMinutes()>=10)){
//             document.getElementById("Button4").style.display="block"
//             document.getElementById("Button5").style.display="none"
            
//         }
    

//     }
// }


export default class LoginForm extends Component {
    
        
    constructor(){
        super()
        let n1 = new Date()
            // alert(n1.getMonth())
            // alert(n1.getDate())
            // alert(n1.getHours())
            // alert(n1.getMinutes())
            // modify()
            
            
        
        
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
                element1=<button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button5"  onClick={this.clickBtn5}>Tentative List</button>
                
                if((n1.getMonth()>=4) && (n1.getDate()>10 || (n1.getDate()==10 && n1.getHours()>=16))){
                    element1=<button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button5"  onClick={this.clickBtn5}>View Final List</button>

                    
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
    <div>
        <div class="float-right">
        
        <button type="submit" class="btn btn-danger" id = "Button0" onClick={this.clickBtn} >LOGOUT</button>
        
        </div>
    <div id="data1"></div>
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
        
    <button type="submit"  className="btn btn-info btn-lg btn-block " id ="Button1"  onClick={this.clickBtn1}>Apply</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button2" onClick={this.clickBtn2}>Change</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" id ="Button3" onClick={this.clickBtn3}>Feedback</button>
    <br></br>      
    <div id="data"></div>
    
        
                  
    
    </form>
    
    </div>
    </div>
    </div>
    
    )
}


}

