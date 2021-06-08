import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import logo from './index.png';
import axios from 'axios';
import sample from './sample1.gif';
import { ArrowLeftCircleFill ,Book} from 'react-bootstrap-icons';


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
  togglePopup=(event)=>{
    event.preventDefault();
    document.getElementById("popup-11").classList.toggle("active");
  }
  clickBtn = (event) => {
    event.preventDefault();
   console.log(this.state);
  }
  clickBtn1 = (event) => {
    event.preventDefault();
    this.props.history.push('/loginform');
  }
 
  
  constructor() {
   

    super();
    document.title="Elective application form"
    
    this.state = {
        name: "",
            rollnumber: "",
            section: "",
            items:[]
            
    };
  axios.get('https://auems2.herokuapp.com/api/getele').then(response=>{
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
  {function preventBack() { window.history.forward(); } }  
    
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null };
      
</script> 

<div class="out222">
            
<img class="img12"src="https://image3.mouthshut.com/images/Restaurant/Photo/-73020_62102.jpg"></img>


           
       
<div class="out4">
<button type="button" onClick={this.clickBtn1} className="btn" id="back1" ><ArrowLeftCircleFill color="greenyellow" class="hover:bg-gray-100" size={40}></ArrowLeftCircleFill></button>
<img src={logo} className="rounded mx-auto d-block" id="img1" style={{height:'25%',width:'30%'}}/>
<br/>
<br/>

<div class="popup" id="popup-11">
  <div class="overlay"></div>
  <div class="content">
    <div class="close-btn" onClick={this.togglePopup}>×</div>
    <h1 class="center">Filling the form</h1>
    <p>Drag and drop according to your preference. A sample illustration is given below where<br></br>Preference 1: FODS<br></br>Preference 2: Cryptography<br></br>Preference 3: Cloud Computing</p>
    <img src={sample} style={{height:'50%',width:'100%'}}></img>
  </div>
</div>
 
<Book class="button11" size={40} onClick={this.togglePopup}></Book>

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
  axios.post('https://auems2.herokuapp.com/api/studentformcol',request)
  
  .then(resp=>{
    var details = resp.data;
    
    if(details=='valid')
    {
      
      alert("response saved")
      this.props.history.push('/loginform');
     
      
    }
   
    if(details!='valid')
    {
      alert("multiple responses are not accepted")
      this.props.history.push('/loginform');
      
    }
  })
   
  .catch(err=>{
    console.log(err);
  })
 
}


