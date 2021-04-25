import React, {Component} from "react";
import logo from './index.png';
import {Preview, print} from 'react-html2pdf';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class management extends Component {
    clickbtn = (event) => {
        event.preventDefault();
        let req = {
            dept: document
                .getElementById('select1')
                .value
        }

        axios
            .post('http://localhost:3001/api/manageelective', req)
            .then(response => {})

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
                        <div id="data"></div>

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

                    </form>
                </body>

            </html>
        )
    }
}