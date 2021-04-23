import React, { useState } from "react";
import logo from './index.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'; 
import axios from 'axios';

export default class viewfeedback extends Component(){

    constructor(){
        super()
        axios.get('http://localhost:3001/api/getfeedele1').then(response=>{
      
      
      var details = response.data;
      var element;
      
      element=<select name="text" id="electivename">
      {details.map((item) => (
        
        <option value={JSON.parse(JSON.stringify(item.content))}>{JSON.parse(JSON.stringify(item.content))}</option>
  
      ))}
      </select>
      
    ReactDOM.render(element, document.getElementById('data'));
      
  
     
      
      
      })
        this.state={rating:0}
    }

render(){


return(
<html>
<head>
	<script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
    <title>Convert Table to PDF using JavaScript</title>
</head>
<body>
    {
        function createPDF() {
            
            // Choose the element that our invoice is rendered in.
            const element = document.getElementById("tab");
            // Choose the element and save the PDF for our user.
            html2pdf()
              .from(element)
              .save();
              // PRINT THE CONTENTS.
        }
    }
    <div id="data"></div>
    <div id="tab">
        
    </div>

    <p>
        <input type="button" value="Create PDF" 
            id="btPrint" onclick="createPDF()" />
    </p>
</body>

</html>
)
    }
}