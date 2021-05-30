import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

const slideImages = [
    'https://i.ytimg.com/vi/MlagMNOPkQU/maxresdefault.jpg',
    'https://images.shiksha.com/mediadata/images/1566297871phpuuCoYB.jpeg',
    'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/08/amrita-college-chennai4186-1598331104.jpg'
  ];
  

export default class printpage extends React.Component {
    pdfExportComponent;
    constructor(){
        super()
        document.title="About us"
    }
    render() {
        return (
            <div>
                <div className="outabout">
                    <h1 className="text-center">About Us</h1>
                    <div className="slide-container">
                        <Slide easing="ease">
                            <div className="each-slide">
                                <div
                                    style={{
                                    'backgroundImage': `url(${slideImages[0]})`
                                }}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div
                                    style={{
                                    'backgroundImage': `url(${slideImages[1]})`
                                }}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div
                                    style={{
                                    'backgroundImage': `url(${slideImages[2]})`
                                }}>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <p>
                        <br></br>
                        This Elective Management system aims to bring about an easier way for the teachers and their 
                        departments to put up their electives and for students to choose them by viewing the available electives
                        and the admins to mediate and oversee these operations.<br></br>
                        The student,teacher and the admin each have their own dashboard where their required facilities are provided.
                        With the automation of the allocation and realloacation (after change in students preferences), it provides a 
                        hassle free expreience for the student, teacher and the administrator.<br></br>
                        The students can choose the electives from the list provided with the guidance of the ratings by the batch who 
                        attended the course before them. They also get an email or a notification whenever the forms open.<br></br>
                        The teachers need not worry about getting the list they would received the final copy.
                        
                        
                    </p>
                    <br></br><br></br><br></br>     
                        <FaHtml5 color='red' size={100}></FaHtml5>&nbsp;
                        <FaCss3Alt color='blue' size={100}></FaCss3Alt>&nbsp;
                        <FaBootstrap color='purple' size={100}></FaBootstrap>&nbsp;
                        <FaReact color='#00ffbb' size={100}></FaReact>&nbsp;&nbsp;
                        <FaNpm color='red' size={100}></FaNpm>&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaNode color='green' size={100}></FaNode>
                        <FaJenkins size={100}></FaJenkins>&nbsp;
                        <FaJira color='blue' size={100}></FaJira>
                        
                </div>
            </div>
        );
    }
}
