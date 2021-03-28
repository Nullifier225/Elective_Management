import React,{ Component }  from 'react';

export default class LoginForm extends Component {
    clickBtn = (event) => {
        event.preventDefault();
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
        <button type="submit" class="btn btn-danger" onClick={this.clickBtn} >LOGOUT</button>
         
        </div>
    <div class="header2">
        <h1 className="text-center" class="header2" >Amrita University Elective Management Portal</h1>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div class="contents">
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block "onClick={this.clickBtn1}>Apply</button>
    <br></br>
    <button type="submit"  className="btn btn-info btn-lg btn-block"onClick={this.clickBtn2}>Change</button>
        <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block" onClick={this.clickBtn3}>Feedback</button>
    <br></br>      
    <button type="submit"  className="btn btn-info btn-lg btn-block">View My Elective</button>
                 
                  
    
    </form>
    
     
    </div>
    </div>
    )
}
}
