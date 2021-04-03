import React ,{Component} from 'react';


export default class TD1  extends Component{
    clickBtn = (event) => {
        event.preventDefault();
        window.location.replace('/');
    };
    render(){
    
    return (
    <div>
        <div class="col-md-11 offset-md-11">
        <button type="button" class="btn btn-danger" onClick={this.clickBtn}>LOGOUT</button>
        </div>
    <div class="header2" className="form-group">
        <h1 className="text-center" class="header2" >Amrita University Elective Management Portal -Department</h1>
        <br></br>
        <br></br>
        <br></br>
        </div> 
       
   <div class="contents" className="form-group">
    <form>
        
    <button type="submit"  className="btn btn-info btn-lg btn-block ">Provide list</button>
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
