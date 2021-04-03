import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
export default class ChangeForm extends Component {
    constructor(){
        super();
   
        this.state = {
            email: "",
            password: "",
    }
     }

     handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
      };
      
      clickBtn1 = (event) => {
        event.preventDefault();
        window.location.replace('/loginform');
      }
  
    render() {

        return (
             

            
            <div class ="out0">
                                <button type="" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
 
            <div class="out" style={{height:"700px" ,width:"auto",top:"5%"}}>
                <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                <br/>
                <br/>

            <form onSubmit={(e)=>submit_signup(e)}>

               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Elective Change Form</h3>
              
                <div className="form-group">
                    <label>Current Elective Name</label>
                    <input type="text"  id="en1" name="currentelectivename" className="form-control" placeholder="Enter elective name" required/>
                </div>

                <div className="form-group">
                    <label>Current Elective Course Code</label>
                    <input type="text" id="cc1" name="currentcc" className="form-control" placeholder="Course code" required></input>
                </div>

                <div className="form-group">
                    <label>Desired Elective Name</label>
                    <input type="text" id="den" name="changeelectivename"  className="form-control" placeholder="Enter elective name" required />
                </div>
                
                <div className="form-group">
                    <label>Desired Elective Course Code</label>
                    <input type="text" id="decc" name="changecc" className="form-control" placeholder="Course code" required></input>
                </div>
                

                <button type="submit" onClick={this.clickBtn} className="btn btn-info btn-lg btn-block">Submit</button>
              
                  
              
            </form>
            </div>
            </div>

        );
        function submit_signup(e){
            e.preventDefault();
            let request =  {
                cename:document.getElementById('en1').value,
                cecoursecode:document.getElementById('cc1').value,
                dename:document.getElementById('den').value,
                decoursecode:document.getElementById('decc').value,
            }
            axios.post('http://localhost:3001/api/changeform',request)
            .then(resp=>{
              var details = resp.data;
              
              if(details=='valid')
              {
                
               
                alert("response saved")
                window.location.replace('/loginform');
              }
              else{
                   
                alert("Multiple responses not accepted")
                window.location.replace('/loginform');
              }
             
              
            })
            .catch(err=>{
              console.log(err);
            })
        }
    }

    
}