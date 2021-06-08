import React, {Component} from "react";
import logo from './index.png';
import {PDFExport} from '@progress/kendo-react-pdf';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class viewfeedback extends Component {
    clickBtn1=(event)=>{
        event.preventDefault();
        this.props.history.push('/deptdashboard');
    }
    clickbtn = (event) => {
        event.preventDefault();
        let req = {
            name: document
                .getElementById('electivename')
                .value
        }

        axios
            .post('https://auems2.herokuapp.com/api/getreport', req)
            .then(response => {
                var details = response.data;
                var element;

                element = <table
                    class="table table-bordered "
                    style={{
                    width: "580px",
                    height: "auto"
                }}>
                    <tr class="table-primary">
                        <th>Feedback</th>
                        <th>Suggestions</th>
                    </tr>
                    {details.map((item) => (
                        <tr>

                            <td>{JSON.parse(JSON.stringify(item.content[0]))}</td>
                            <td>{JSON.parse(JSON.stringify(item.content[1]))}</td>
                        </tr>

                    ))}
                </table>

                ReactDOM.render(element, document.getElementById('tab1'));
                document.getElementById("printbutton").style.display="block"
            })

        axios
            .post('https://auems2.herokuapp.com/api/getavg', req)
            .then(response => {
                var details = response.data;
                var element1,
                    element2,
                    name;

                name = <p>Elective name:{document
                        .getElementById('electivename')
                        .value}</p>
                ReactDOM.render(name, document.getElementById('tab10'));

                element1 = <div>
                    {details.map((item) => (

                        <p>Average Ratings:{JSON.parse(JSON.stringify(item.content[0]))}</p>

                    ))}</div>

                ReactDOM.render(element1, document.getElementById('tab11'));

                element2 = <div>
                    {details.map((item) => (

                        <p>No.of entries:{JSON.parse(JSON.stringify(item.content[1]))}</p>

                    ))}</div>

                ReactDOM.render(element2, document.getElementById('tab12'));
            })
    }
    constructor() {
        
        super()
        document.title="Feedback Report"
        axios
            .get('https://auems2.herokuapp.com/api/getfeedele1')
            .then(response => {

                var details = response.data;
                var element;

                element = <select name="text" id="electivename">
                    {details.map((item) => (

                        <option value={JSON.parse(JSON.stringify(item.content))}>{JSON.parse(JSON.stringify(item.content))}</option>

                    ))}
                </select>

                ReactDOM.render(element, document.getElementById('data'));

            })

    }
   

    render() {

        return (
            
                <div
                    class="out"
                    style={{
                    width: "620px",
                    height: "auto",
                    top: "5%"
                }}>
                    <button type="" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
                    <img src={logo} className="rounded mx-auto d-block" style={{height:'25%',width:'25%'}}/>
                    <br></br>
                    <h4 className="text-center font-weight-bold font-size:1.5em" class="heading1">Get feedback report</h4>
                    <br></br>
                    <br></br>
                    <form>
                        <div class="form-group">
                            <label>Elective Name</label>
                        </div>
                        <div class="form-group" id="data"></div>
                        <button class="btn btn-info btn-lg btn-block k-button" type="submit" onClick={this.clickbtn}>Get report</button>
                        <br></br>
                        <br></br>
                    </form>
                    <PDFExport
                    paperSize="A4"
                    margin="0.5cm"
                    ref={(component) => this.pdfExportComponent = component}>
                    </PDFExport>
                    <div id="tab">
                        <div id="tab10"></div>
                        <div id="tab11"></div>
                        <div id="tab12"></div>
                        <div id="tab13"></div>
                        <div id="tab1"></div>
                    </div>

                    <button  id = "printbutton" className="btn btn-info btn-lg btn-block k-button"
                        
                        onClick={() => {
                        this
                            .pdfExportComponent
                            .save();
                    }}>
                        Print PDF
                    </button>

               </div>
        )
    }
}