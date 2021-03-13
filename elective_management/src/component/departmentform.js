import React, { useState } from "react";
import logo from './index.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'; 
function App1() {
    const clickBtn = (event) => {
        event.preventDefault();
        
        }
        const clickBtn1 = (event) => {
          event.preventDefault();
          window.location.replace('/deptdashboard');
          }
        
    const [inputList, setInputList] = useState([{ department:"",electivename: "", max: "",min: "", desc:"",cm:"" }]); 

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { department:"",electivename: "", max: "",min: "", desc:"",cm:""}]);
  };
 
  return (
    <div className="App1">
      { inputList.map((x, i) => {
        return (
          <div class="out">
        <button type="" onClick={clickBtn1} className="btn"><ArrowLeftCircleFill color="royalblue" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
        <form class>
        <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
            <br/>
            <br/>
           <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Department Elective List</h3>

           <div className="form-group">
                <label>Department</label>
                <br/>
                <select name="department" value={x.department} onChange={e => handleInputChange(e, i)}><option value="CSE">CSE</option>
<option value="ECE">ECE</option></select>
            </div>
             
            <div className="form-group">
                <label>Elective name</label>
                <input type="text" name="electivename" value={x.electivename} onChange={e => handleInputChange(e, i)} className="form-control" placeholder="Enter elective name" />
            </div>

            <div className="form-group">
                <label>Maximum no.of students </label>
                <input type="number" id="max" name="max"  value={x.max} onChange={e => handleInputChange(e, i)}step="10"></input>
            </div>

            <div className="form-group">
                <label>Minimum no.of students </label>
                <input type="number" id="min" name="min"  value={x.min} onChange={e => handleInputChange(e, i)} step="5"></input>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea id="desc" name="desc"  value={x.desc} onChange={e => handleInputChange(e, i)}rows="4" cols="50"></textarea>
            </div>

            <div className="form-group">
                <label>Course mentor</label>
                <input type="text" name="cm"  value={x.cm} onChange={e => handleInputChange(e, i)}/>
                <br/>
                <br/>
                <div className="btn-box">
        {inputList.length !== 1 && <button
          className="btn btn-danger mr-1"
          onClick={() => handleRemoveClick(i)}>Remove</button>}
        {inputList.length - 1 === i && <button className="btn btn-success ml-1 flex " onClick={handleAddClick}>Add</button>}
      </div>
      <br/>
                <button type="submit" onClick={clickBtn} className="btn btn-info mr-0 ml-0 pl-0 pr-0 btn-block">Submit</button>
            </div>
            
            
              
        
        </form>
        
        </div>
         
        
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}
 
export default App1;