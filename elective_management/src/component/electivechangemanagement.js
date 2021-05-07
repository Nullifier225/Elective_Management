import React, {Component} from "react";
import logo from './index.png';
import {Preview, print} from 'react-html2pdf';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class changemanagement extends Component {
    clickbtn = (event) => {
        event.preventDefault();
        let req = {
            dept: document
                .getElementById('select1')
                .value
        }
        document.getElementById('print').style={display:"block"};
        axios
            .post('http://localhost:3001/api/manageelectivechange', req)
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

    }

    render()

    {
        return (
            <html>
                <head></head>
                <body>
       

                    <form>
                        

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
                        </div>
                        <button type="submit" onClick={this.clickbtn}>Allocate
                        </button>
                        
                        <div id="tab">
                        <div id="data"></div>
                        
                        </div>
                        </form>
                        
                            
                        <button id="print" style={{display:"none"}} onClick={()=>print('a', 'data')}>print</button>
                           
                        
                        
                    
                </body>

            </html>
        )
    }
}