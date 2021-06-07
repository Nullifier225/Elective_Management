import React, {Component} from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {ArrowLeftCircleFill} from 'react-bootstrap-icons';
export default class ChangeForm extends Component {
    handleChange = (event) => {  
        
        axios.get('https://auems2.herokuapp.com/api/getcc',{
            params:{
                name: document.getElementById('electivename').value
            }
        }).then(response => {
            var details = response.data;             
            var element;
            
            element = <input type="text" id="coursecode" value={JSON.parse(JSON.stringify(details[0].content))} readOnly></input>

         ReactDOM.render(element, document.getElementById('data2'));         })
    };

    
    constructor() {
        super();
        document.title="Elective Change Form"
        this.state = {
            currentelectivename: "",
            currentcc: "",
            changeelectivename: "",
            changecc: ""

        }
        axios
            .get('https://auems2.herokuapp.com/api/getele')
            .then(response => {

                var details = response.data;
                var element;

                element = <select defaultValue={'DEFAULT'} name="text" id="electivename" onChange={this.handleChange}>
                    <option value="DEFAULT" disabled>Choose desired elective</option>
                    {details.map((item) => (
                        
                        <option value={JSON.parse(JSON.stringify(item.content))} default>{JSON.parse(JSON.stringify(item.content))}</option>
                        
                    ))}
                </select>

                ReactDOM.render(element, document.getElementById('data1'));

            })
    }

    // $('electivename')
    //     .change(function () {
    //         
    //     })

    

    clickBtn1 = (event) => {
        event.preventDefault();
        this.props.history.push('/loginform');
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

                    <form onSubmit={(e) => submit_signup(e)}>

                        <h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Elective Change Form</h3>

                        <div className="form-group">
                            <label>Desired Elective Name</label>
                            <div id="data1"></div>
                        </div>

                        <div className="form-group">
                            <label>Desired Elective Course Code</label>
                            <div id="data2"></div>
                        </div>

                        <button
                            type="submit"
                            id="button2"
                            onClick={this.clickBtn}
                            className="btn btn-info btn-lg btn-block">Submit</button>

                    </form>
                </div>
            </div>

        );
        function submit_signup(e) {
            e.preventDefault();
            let request = {
                
                dename: document
                    .getElementById('electivename')
                    .value,
                decoursecode: document
                    .getElementById('coursecode')
                    .value
            }
            axios
                .post('https://auems2.herokuapp.com/api/changeform', request)
                .then(resp => {
                    var details = resp.data;

                    if (details == 'valid') {

                        alert("response saved")
                        window
                            .location
                            .replace('/loginform');
                    } else {

                        alert("Multiple responses not accepted")
                        window
                            .location
                            .replace('/loginform');
                    }

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

}