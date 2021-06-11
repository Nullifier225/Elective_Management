import React, { useState } from "react";
import logo from './index.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'; 
import axios from 'axios';
import ReactDOM from 'react-dom';
function App1(props) {
    document.title="Department elective list"
    const clickBtn = (event) => {
        event.preventDefault();
        
        }
        const clickBtn1 = (event) => {
          event.preventDefault();
          props.history.push('/deptdashboard');
          }
        
    const [inputList, setInputList] = useState([{ department:"",electivename: "",coursecode:"",electiveyear:"", max: 0,min: 0, desc:"",cm:"" }]); 

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  const handleAddClick = () => {
    setInputList([...inputList, { department:"",electivename: "",coursecode:"",electiveyear:"", max: 0,min: 0, desc:"",cm:""}]);
  };
 
  return (
    <div className="App1">
      { inputList.map((x, i) => {
        return (
          <div class="out222">
            
            <img class="img12"src="https://image3.mouthshut.com/images/Restaurant/Photo/-73020_62102.jpg"></img>

         <div class="out" style={{ height:"auto", width:"auto",top:"0%"}}> 
        
        <form onSubmit={(e)=>submit_deptform(e)} >
        <button id = "back1" type="" onClick={clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
        <img src={logo} id = "img1" className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
            <br/>
            <br/>
           <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Department Elective List</h3>

           <div className="form-group">
                <label>Department</label>
                <br/>
                <select required name="department" value={x.department} id = "select1" onChange={e => handleInputChange(e, i)}><option value=""> -- select an option -- </option><option value="CSE">CSE</option>
<option value="ECE">ECE</option><option value="EEE">EEE</option><option value="MEE">MEE</option><option value="CIE">CIE</option><option value="AEE">AEE</option></select>
            </div>

            
            <div className="form-group">
                <label>Elective name</label>
                <input type="text" name="electivename"  required id="elective_name" value={x.electivename} onChange={e => handleInputChange(e, i)} className="form-control" placeholder="Enter elective name" />
            </div>

            <div className="form-group">
                <label>Elective course code</label>
                <input type="text" name="coursecode"  required id="coursecode" value={x.coursecode} onChange={e => handleInputChange(e, i)} className="form-control" placeholder="Enter elective course code" />
            </div>

            <div className="form-group">
                <label>Elective year</label>
                <input type="number" min="1" max="4" name="electiveyear"  required id="electiveyear" value={x.electiveyear} onChange={e => handleInputChange(e, i)} className="form-control" placeholder="Enter elective year" />
            </div>

            <div className="form-group">
                <label>Maximum no.of students </label>
                <br/>
                <input type="number"  required id="max" name="max" min = {x.min} value={x.max} onChange={e => handleInputChange(e, i)}step="10"></input>
            </div>

            <div className="form-group">
                <label>Minimum no.of students </label>
                <br/>
                <input type="number"   required id="min" name="min" min = "0" max={x.max} value={x.min} onChange={e => handleInputChange(e, i)} step="5"></input>
            </div>
            <div className="form-group">
                <label>Description</label>
                <br/>
                <textarea id="desc"   required name="desc"  value={x.desc}  id = "input6" onChange={e => handleInputChange(e, i)}rows="4" cols="50"></textarea>
            </div>

            <div className="form-group">
                <label>Course mentor</label>
                <br/>
                <input type="text" name="cm"  required value={x.cm} id = "input7" onChange={e => handleInputChange(e, i)}/>
                <br/>
                <br/>
                <div className="btn-box">
        {inputList.length !== 1 && <button
          className="btn btn-danger mr-1"
          onClick={() => handleRemoveClick(i)}>Remove</button>}
        {inputList.length - 1 === i && <button id = "submit1" className="btn btn-success ml-1 flex " onClick={handleAddClick}>Add</button>}
      </div>
      <br/>
                <button type="submit" id = "submit2" className="btn btn-info mr-0 ml-0 pl-0 pr-0 btn-block">Submit</button>
            </div>
            
            
              
        
        </form>
        </div>
        </div>
         
        
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );

  
  function submit_deptform(e){
    e.preventDefault();
    let a=inputList;
    let request =  {
      array1:a
       
       
        
    }
    console.log("request");
    axios.post('http://localhost:3001/api/deptformcol',request)
    
    .then(resp=>{
      var details = resp.data;
      
      if(details=='valid')
      {
        
        alert("response saved")
        window.location.replace('/deptdashboard');
       
        
      }
     
      if(details!='valid')
      {
        console.log("error");
      }
    })
     
    .catch(err=>{
      console.log(err);
    })
   
}
}
 
export default App1;