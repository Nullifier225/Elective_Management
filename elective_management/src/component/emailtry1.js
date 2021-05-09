import React, {Component} from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
export default class sendemail extends Component {
    handleChange = (event) => {

        var val1 = document.getElementById("receiver").value
        if (val1==("Student")) {
          
           var element = <select defaultValue={'DEFAULT'} name="text" id="dept">
                <option value="DEFAULT" disabled>Choose Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MEE">MEE</option>
                <option value="CIE">CIE</option>
                <option value="AEE">AEE</option>
            </select>
           

            var  element1 = <select defaultValue={'DEFAULT'} name="text" id="year">
                <option value="DEFAULT" disabled>Choose Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                
            </select>

            ReactDOM.render(element, document.getElementById('data2'));
            ReactDOM.render(element1, document.getElementById('data3'));
            document.getElementById("data2").style.display="block";
            document.getElementById("data3").style.display="block";
        }
        if (val1==("Department")) {
            document.getElementById("data2").style.display="none";
            document.getElementById("data3").style.display="none";
    }
    }
    constructor() {
        super();

        this.state = {
            currentelectivename: "",
            currentcc: "",
            changeelectivename: "",
            changecc: ""

        }

    }

    // $('electivename')     .change(function () {
    //
    //     })

    clickBtn1 = (event) => {
        event.preventDefault();
        window
            .location
            .replace('/loginform');
    }

    render() {

        return (

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

                    <form onSubmit={(e) => submit_email1(e)}>

                        <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">
                            Send Notification</h3>
                            <br></br>
                        <select
                            defaultValue={'DEFAULT'}
                            name="text"
                            id="receiver"
                            onChange={this.handleChange}>
                            <option value="DEFAULT" disabled>Choose Receiver category</option>
                            <option value="Student">Student</option>
                            <option value="Department">Department</option>
                        </select>
                        
                        <div id="data2"></div>
                    
                        <div id="data3"></div>
                        
                        Enter subject of email
                        <br></br>
                        <input type="text" id="subject"/>
                        <div>
                        <br></br>
                        Enter content of email
                        <br></br>
                        <textarea
                            id="content" rows="5" cols="50"/> 
                            

                        </div>
                        <button
                            type="submit"
                            id="button2"
                            onClick={this.clickBtn}
                            className="btn btn-info btn-lg btn-block">Send Email</button>

                    </form>

                </div>
            </div>

        );
        function submit_email1(e) {
            e.preventDefault();
            let request =  {
                
                 receiver:document.getElementById("receiver").value,
                 subject:document.getElementById("subject").value,
                 content:document.getElementById("content").value,
                 dept:document.getElementById("dept").value,
                 year:document.getElementById("year").value



                 
                  
              }
            axios
                .post('http://localhost:3001/api/sendemail',request)
                .then(resp => {

                    var details = resp.data;

                    if (details == 'valid') {

                        alert("Notification sent")

                    } else {

                        alert("error in notifying, check server")

                    }

                })
                .catch(err => {
                    console.log(err);
                })
        }

    }

}