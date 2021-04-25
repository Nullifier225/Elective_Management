import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route,Switch } from 'react-router-dom';    
import './App.css';
import Login from './component/login';
import LoginForm from './component/Studentdashboard';
import App1 from './component/departmentform';
import ChangeForm from './component/changeform';
import StudentForm from'./component/studentsform';
import TD from'./component/departmentdashboard';
import AD from './component/admindashboard';
import adminstudentlist from './component/adminstudentlist';
import viewelectivechange from './component/viewelectivechange';
import Feedbackform from './component/feedbackform';
import viewfeedback from './component/viewfeedback';
import errorpage from './component/ErrorPage';
import management from './component/electivemanagement';

class App extends Component {
  render() {
    return (
<BrowserRouter>
        
            <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/loginform" component={LoginForm} exact/>
            <Route path="/studentsform" component={StudentForm} exact/>
            <Route path="/departmentform" component={App1} exact/>
            <Route path="/changeform" component={ChangeForm} exact/>
            <Route path="/deptdashboard" component={TD} exact/>
            <Route path="/admindashboard" component={AD} exact/>
            <Route path="/adminstudentlist" component={adminstudentlist} exact/>
            <Route path="/viewelectivechange" component={viewelectivechange} exact/>
            <Route path="/feedbackforms" component={Feedbackform} exact/>
            <Route path="/viewfeedbacks" component={viewfeedback} exact/>
            <Route path="/error" component={errorpage} exact/>
            <Route path="/management" component={management} exact/>
            
            

            </Switch>
            
</BrowserRouter>
    )}}
export default App;
