import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import logo from './index.png';
import axios from 'axios';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  background: isDragging ? "lightgreen" : "grey",

  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});


export default class App22 extends Component {
     handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
      };

         
    
    geteless(array){
      alert(array)
      this.xy=array;
      alert("this.xy"+this.xy)
  }
    
  clickBtn = (event) => {
    event.preventDefault();
   console.log(this.state);
  }
  clickBtn1 = (event) => {
    event.preventDefault();
    window.location.replace('/loginform');
  }
 
  
  constructor() {
    
    super();
    
    this.state = {
        name: "",
            rollnumber: "",
            section: "",
            items:[]
            
    };
  axios.get('http://localhost:3001/api/getele').then(response=>{
    const xy =response.data
    this.setState({name:"",rollnumber:"",section:"",items:xy})})
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const itemss = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items:itemss
      
    });
  }
 
  
  render() {
    
    return (
      <div>
<script type = "text/javascript" >
  {function preventBack() { window.history.forward(); }  }  
    
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null };  
</script> 

        <div class ="out1">
           <button type="button" onClick={this.clickBtn1} className="btn" id="back1" ><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
       
<div class="out4">

<img src={logo} className="rounded mx-auto d-block" id="img1" style={{height:'25%',width:'25%'}}/>
<br/>
<br/>

<form onSubmit={(e)=>submit_studentform(e,this.state.items)}>

<h3 className="text-center font-weight-bold font-size:1.5em" class="heading1">Students Elective Selection</h3>

<div className="form-group">
  <label>Name</label>
  <input type="text" id="name" required name="name" onChange={this.handleChange("name")} className="form-control" placeholder="Enter your name" />
</div>

<div className="form-group">
  <label>Section</label>
  <input type="text" id="sec"  required name="section" onChange={this.handleChange("section")} className="form-control" placeholder="Enter your section" />
</div>



<div className = 'out3'>
  <div className= "form-group">
  <label>Choice</label>
  <div>
  <DragDropContext onDragEnd={this.onDragEnd}>
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
    <div 
    {...provided.droppableProps}
    ref={provided.innerRef}
    >
    {this.state.items.map((item,index) => (
      <Draggable key={item.id} draggableId={item.content} index={index}>
      {(provided, snapshot) => (
      <div 
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getItemStyle(
          snapshot.isDragging,
          provided.draggableProps.style
        )}
      ><p class="bg-white-100">{item.content}</p>
      
      </div>
    )}
    </Draggable>
  ))}
  {provided.placeholder}
  </div>
  )}
  </Droppable>
  </DragDropContext>

</div>
</div>


<button type="submit" id="button1" className="btn btn-info btn-lg btn-block">Submit</button>


</div>
</form>
</div>
</div>
</div>

    );
    
  }
  

}
function submit_studentform(e,items){
 
  
  e.preventDefault();
  let request =  {
    name:document.getElementById('name').value,
    sec:document.getElementById('sec').value,
    pref:items
      
  }
  console.log("request");
  axios.post('http://localhost:3001/api/studentformcol',request)
  
  .then(resp=>{
    var details = resp.data;
    
    if(details=='valid')
    {
      
      alert("response saved")
      window.location.replace('/loginform');
     
      
    }
   
    if(details!='valid')
    {
      alert("multiple responses are not accepted")
      window.location.replace('/loginform');
      
    }
  })
   
  .catch(err=>{
    console.log(err);
  })
 
}


