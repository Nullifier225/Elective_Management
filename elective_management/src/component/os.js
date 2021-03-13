import React, { useState } from "react";
import logo from './index.png';
export default class App22 extends Component{
    [inputList, setInputList] : useState[{ electivenamedd, max: "",min: "", desc:"",cm:"" }];
    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        };
        clickBtn = (event) => {
            event.preventDefault();
            
            }
    handleRemoveClick = index => {
            const list = [...inputList];
            list.splice(index, 1);
            setInputList(list);
            };
    handleAddClick = () => {
            setInputList([...inputList, { electivename: "", max: "",min: "", desc:"",cm:""}]);
            };
    render(){
        return(
            <div class="out" name={i}>
        <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
            <br/>
            <br/>
           <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Department Elective List</h3>

           <div className="form-group">
                <label>Department</label>
                <br/>
                <select name="department" value="department"><option value="CSE">CSE</option>
<option value="ECE">ECE</option></select>
            </div>
            </div>
        );
    }
        }    

    

