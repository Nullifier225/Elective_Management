import React, {Component} from "react";
import logo from './index.png';
import {Preview, print} from 'react-html2pdf';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {PDFExport} from '@progress/kendo-react-pdf';

export default class management extends Component {

    clickBtn1 = (event) => {
        event.preventDefault();
        window
            .location
            .replace('/admindashboard');
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
            .post('http://localhost:3001/api/manageelective', req)
            .then(response => {
                var details=response.data
                var element,element1;
                element=<table class="table table-bordered " style={{width:"635px",height:"auto"}}>
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

                
            })
            

    }
    constructor() {

        super();

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

                    <form>
                        <h3>ELECTIVE ALLOCATION MANAGEMENT</h3>

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
                        <button type="submit" onClick={this.clickbtn}>Allocate
                        </button>
                        
                        <div id="tab">
                        <PDFExport
                    paperSize="A4"
                    margin="0.5cm"
                    ref={(component) => this.pdfExportComponent = component}>
                        <div id="data"></div>
                        </PDFExport>
                        
                        </div>
                        </form>
                        
                            
                        <div className="example-config">
                    <button
                        className="k-button"
                        onClick={() => {
                        this
                            .pdfExportComponent
                            .save();
                    }}>
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