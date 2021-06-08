import React, {Component} from "react";
import logo from './index.png';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {PDFExport} from '@progress/kendo-react-pdf';
import {PersonCheck} from 'react-bootstrap-icons';
import {Download} from 'react-bootstrap-icons';



export default class management extends Component {

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
        axios
            .post('https://auems2.herokuapp.com/api/manageelective', req)
            .then(response => {
                var details=response.data
                var element,element1;
                element=<table class="table table-bordered " style={{width:"575px",height:"auto"}}>
                <tr class="table-primary">
                <th>Student</th>
                <th>Elective</th>
                </tr>
                {details.map((item) => (<tr>
        
                <td>{JSON.parse(JSON.stringify(item.id))}</td>
                <td>{JSON.parse(JSON.stringify(item.content))}</td>
                </tr>

                ))}
                </table>
                ReactDOM.render(element, document.getElementById('data'));
                document.getElementById('printbtn').style.display="block";

                
            })
            

    }
    constructor() {
        document.title="Elective Management"
        super();

    }

    render()

    {
        return (
            <html>
                <head></head>
                <body>
       
                <div class="out222">
            
                <img class="img12"src="https://image3.mouthshut.com/images/Restaurant/Photo/-73020_62102.jpg"></img>
                
                <div
                    class="out"
                    style={{
                    width: "620px",
                    height: "auto",
                    top: "5%"
                }}>
                    <button type="" id="button1" onClick={this.clickBtn1} className="btn">
                    <ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill>
                </button>
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
                        <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Manage Elective Allocation</h3>

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
                            <br></br>
                            <br></br>
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
                        <button className="btn btn-info btn-lg btn-block"type="submit" onClick={this.clickbtn}><PersonCheck color="white" class="hover:bg-gray-100" size={30}></PersonCheck>&nbsp; &nbsp;Allocate
                        </button>
                        </form>
                        <br></br>
                        <div id="tab">
                        <PDFExport
                    paperSize="A4"
                    margin="0.5cm"
                    ref={(component) => this.pdfExportComponent = component}>
                        
                        <div id="data"></div>
                        </PDFExport>
                        
                        </div>
                        
                        
                           <br></br> 
                        <div className="example-config">
                            <br></br>
                    <button  className="btn btn-info btn-lg btn-block k-button" id="printbtn" style={{display:"none"}}
                        
                        onClick={() => {
                        this
                            .pdfExportComponent
                            .save();
                    }}><Download color="white" class="hover:bg-gray-100" size={30}></Download>
                         &nbsp; &nbsp;
                        Export PDF
                    </button>
                </div>
                           
                        </div>
                        </div>
                    
                </body>

            </html>
        )
    }
}