import React, {Component} from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
export default class sendemail extends Component {
    
    
    constructor() {
        super();

        this.state = {
            currentelectivename: "",
            currentcc: "",
            changeelectivename: "",
            changecc: ""

        }
        

            
    }

    // $('electivename')
    //     .change(function () {
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

                        <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1"></h3>

                      
                        <button
                            type="submit"
                            id="button2"
                            onClick={this.clickBtn}
                            className="btn btn-info btn-lg btn-block">Notify form availability</button>

                    </form>

                    <form onSubmit={(e) => submit_email2(e)}>

                        <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1"></h3>

                      
                        <button
                            type="submit"
                            id="button2"
                            onClick={this.clickBtn}
                            className="btn btn-info btn-lg btn-block">Notify change form availability</button>

                    </form>
                </div>
            </div>

        );
        function submit_email1(e) {
            e.preventDefault();
          
            axios.post('http://localhost:3001/api/sendemail')
            
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

        function submit_email2(e) {
            e.preventDefault();
          
            axios.post('http://localhost:3001/api/sendemail2')
            
                .then(resp => {

                    var details = resp.data;

                    if (details == 'valid') {

                        alert("notification sent")
                        
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