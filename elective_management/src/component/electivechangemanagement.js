import React, {Component} from "react";
import logo from './index.png';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {PersonCheck} from 'react-bootstrap-icons';


export default class changemanagement extends Component {
    clickBtn1 = (event) => {
        event.preventDefault();
        this.props.history.push('/admindashboard');
    }
    clickbtn = (event) => {
        event.preventDefault();
        let req = {
            dept: document
                .getElementById('select1')
                .value,
            year: document
                .getElementById('select2')
                .value
        }
        //document.getElementById('print').style={display:"block"};
        axios
            .post('https://auems2.herokuapp.com/api/manageelectivechange', req).then(response=>{
                var details=response.data
                if (details=="done"){
                    alert("Allocation done")
                    this.props.history.push('/admindashboard');
                }
            })
            // .then(response => {
            //     var details=response.data
            //     var element,element1;
            //     element=<table class="table table-bordered " style={{width:"635px",height:"auto"}}>
            //     <tr class="table-primary">
            //     <th>Student</th>
            //     <th>Elective</th>
            //     </tr>
            //     {details.map((item) => (<tr>
        
            //     <td>{JSON.parse(JSON.stringify(item.id))}</td>
            //     <td>{JSON.parse(JSON.stringify(item.content))}</td>
            //     </tr>

            //     ))}
            //     </table>
            //     ReactDOM.render(element, document.getElementById('data'));

                
            // })
            

    }
    constructor() {

        super();
        document.title="Elective Change Management"

    }

    render()

    {
        return (
            <html>
                <head></head>
                <body>
                <div class="out0">
                <button type="" id="button1" onClick={this.clickBtn1} className="btn">
                    <ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill>
                </button>
                <div
                    class="out"
                    style={{
                    height: "700px",
                    width: "auto",
                    top: "5%"
                }}>
                    <img
                        id="img1"
                        src={logo}
                        className="rounded mx-auto d-block"
                        style={{
                        height: '25%',
                        width: '25%'
                    }}/>
                    <br/>
                    <br/>

                    <form >
                        
                     <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Manage Elective Change</h3>
                        <div className="form-group">
                            <label>Department</label>
                            <br/>
                            <select required name="department" id="select1">
                                <option value="">
                                    -- select an option --
                                </option>
                                <option value="CSE">CSE</option>
                                <option value="ECE">ECE</option>
                               
                            </select>
                            <br/>
                            <br/>
                            <label>Year</label>
                            <br/>
                            
                            <select required name="year" id="select2">
                                <option value="">
                                    -- select an option --
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                               
                            </select>
                        </div>
                        <button  className="btn btn-info btn-lg btn-block" type="submit" onClick={this.clickbtn}><PersonCheck color="white" class="hover:bg-gray-100" size={30}></PersonCheck>&nbsp; &nbsp;Allocate
                        </button>
                        
                        <div id="tab">
                        <div id="data"></div>
                        
                        </div>
                        </form>
                        
                            
                        
                       </div>    
                        
                     </div>   
                    
                </body>

            </html>
        )
    }
}