import React, {Component} from "react";
import logo from './index.png';
import {Preview, print} from 'react-html2pdf';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class viewfeedback extends Component {
    clickbtn = (event) => {
        event.preventDefault();
        let req = {
            name: document
                .getElementById('electivename')
                .value
        }

        axios
            .post('http://localhost:3001/api/getreport', req)
            .then(response => {
                var details = response.data;
                var element;

                element = <table
                    class="table table-bordered "
                    style={{
                    width: "635px",
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
            })

        axios
            .post('http://localhost:3001/api/getavg', req)
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
        axios
            .get('http://localhost:3001/api/getfeedele1')
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
            <html>
                <head></head>
                <body>

                    <form>
                        <div id="data"></div>
                        <button type="submit" onClick={this.clickbtn}>Get report</button>
                    </form>
                    <div id="tab">
                        <div id="tab10"></div>
                        <div id="tab11"></div>
                        <div id="tab12"></div>
                        <div id="tab13"></div>
                        <div id="tab1"></div>
                    </div>

                    <button onClick={() => print('a', 'tab')}>
                        print</button>

                </body>

            </html>
        )
    }
}