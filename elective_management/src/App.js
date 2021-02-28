import logo from './logo.svg';
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route,Switch } from 'react-router-dom';    
import './App.css';
//import React,{useState} from 'react';
import Login from './component/signuptry1';
import LoginForm from './component/Studentdashboard';
import DeptForm from './component/departmentform';
import ChangeForm from './component/changeform';
import StudentForm from'./component/studentsform';
import TD from'./component/departmentdashboard';

/*function App() {
  const adminUser={
    email:"admin@admin.com",
    password:"admin123"
  }

  const[user,setUser]=useState({name:"",email:""});
  const[error,setError]=useState("");

  const Login = details=>{
    console.log(details);
  }

  const Logout=()=>{
    console.log("Logout");
  }

  return (

    <div className="App">
      
      {(user.email!="") ? (
        <div className="welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          <button>Logout</button> </div>) : (
        <LoginForm Login={Login} error={error}/>
      )}

        </div>
  


  )
}*/

class App extends Component {
  render() {
    return (
<BrowserRouter>
        
            <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/loginform" component={LoginForm} exact/>
            <Route path="/studentsform" component={StudentForm} exact/>
            <Route path="/departmentform" component={DeptForm} exact/>
            <Route path="/changeform" component={ChangeForm} exact/>
            <Route path="/deptdashboard" component={TD} exact/>
            </Switch>
            
</BrowserRouter>
    )}}
export default App;
