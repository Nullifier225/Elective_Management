import React, { Component } from "react";
import logo from './index.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
export default class errorpage extends Component {
    clickBtn1 = (event) => {
        event.preventDefault();
        this.props.history.push('/loginform');
      }
constructor(){
    super();
    // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}

render(){
return(
<html lang="en">
<head>
    <meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>We&#39;ve got some trouble | 404 - Resource not found</title>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"></link>
</head>

    

<body style={{fontFamily:"Raleway,sans-serif"
        
    }}>
<button type="" onClick={this.clickBtn1} className="btn"><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>

    <div class="cover">
    <img src={logo} className="rounded mx-auto d-block" id="img1" style={{height:'10%',width:'10%'}}/>
    <h1 className="text-center">Resource not found <small>404</small></h1>
    <h2 className="text-center">The requested file could not be found but will be coming soon in: </h2>
    <p className="text-center" id="demo"></p>
    <footer>
        <p class="text-center">
            Technical Contact: 
            <a href="xyzadmin@amrita.edu">xyzadmin@amrita.edu</a>
        </p>
    </footer>
    </div>
</body>
</html>
)}
}