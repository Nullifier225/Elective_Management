import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import { Rating } from 'material-ui-rating'
import { IconButton } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'; 
export default class Feedbackform extends Component {
    
    
  clickBtn = (event) => {
    event.preventDefault();
    
  };
  clickBtn1 = (event) => {
    event.preventDefault();
    this.props.history.push('/loginform');
  }
 
  constructor(){
      super()
      document.title="Elective Feedback Form"
      axios.get('http://localhost:3001/api/getfeedele').then(response=>{
    
    
    var details = response.data;
    var element;
    
    element=<select name="text" id="electivename">
    {details.map((item) => (
      
      <option value={JSON.parse(JSON.stringify(item.content))}>{JSON.parse(JSON.stringify(item.content))}</option>

    ))}
    </select>
    
  ReactDOM.render(element, document.getElementById('data'));
    

   
    
    
    })
      this.state={rating:0}
  }
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
    alert(this.state.rating)
    };
    render() {

        return (
            <div class="out0">
                        <button type="" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>

            <div class="out" style={{ height:"auto", width:"auto",top:"0%"}}> 
                
                <img src={logo} className="rounded mx-auto d-block" style={{height:'auto',width:'auto'}}/>
                <br/>
            <form id="myForm" onSubmit={(e)=>submit_feedback(e,this.state.rating)}>
            
               <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Feedback Form</h3> 

                

                <div className="form-group">
                    <label>Elective Name</label>
                    <div id="data"></div>
                </div>

        
                <p>Rating</p>
                <div class="form-group" className="float-left ">
                <div class="starRating" id="stars">
                <input id="rating5" type="radio" name="rating" value="5" onChange={this.handleChange}/>
                 <label for="rating5">5</label>
                <input id="rating4" type="radio" name="rating" value="4" onChange={this.handleChange}/>
                <label for="rating4">4</label>
                <input id="rating3" type="radio" name="rating" value="3" onChange={this.handleChange}/>
                <label for="rating3">3</label>
                <input id="rating2" type="radio" name="rating" value="2" onChange={this.handleChange}/>
                <label for="rating2">2</label>
                <input id="rating1" type="radio" name="rating" value="1" onChange={this.handleChange}/>
                <label for="rating1">1</label>
                </div>
                </div>

  

                

                <br></br>
                <br></br>

                <div className="form-group">
                <label>Course Feedback</label>
                <br/>
                <textarea id="desc"   required name="desc"  rows="5" cols="50"></textarea>
                </div>

                <div className="form-group">
                <label> Recommended courses for the future </label>
                <textarea id="desc1"   required name="desc"  rows="5" cols="50"></textarea>
                </div>


                <button type="submit"  className="btn btn-info btn-lg btn-block">Submit</button>
              
                  
            </form>
            <br></br>
            
            
            </div>
            </div>
            
        );
     
        function submit_feedback(e,r){
            e.preventDefault();
            
            
    var rate_value;
    
    if(document.getElementById('rating1').checked == true ){
        
    rate_value = document.getElementById('rating1').value;}
    if (document.getElementById('rating2').checked == true )
    {
    rate_value = document.getElementById('rating2').value;
  }
    else if(document.getElementById('rating3').checked == true )
    {
    rate_value = document.getElementById('rating3').value;
  }  
    else if(document.getElementById('rating4').checked == true )
    {
    rate_value = document.getElementById('rating4').value;
  }  
    else if(document.getElementById('rating5').checked == true ){
    rate_value = document.getElementById('rating5').value;
  }  

            let request =  {
               
                electivename:document.getElementById('electivename').value,
                desc:document.getElementById('desc').value,
                desc1:document.getElementById('desc1').value,
                Rating:rate_value
                

                
        
            }
            axios.post('http://localhost:3001/api/submitfeedback',request)
            
            .then(resp=>{
              var details = resp.data;
              
              if(details=='valid')
              {
                
               
                alert("response saved")
                this.props.history.push('/loginform');
              }
              else{
                   
                alert("Multiple responses not accepted")
                this.props.history.push('/loginform');
              }
             
              
            })
            
            .catch(err=>{
              console.log(err);
            })
        }
    }
}