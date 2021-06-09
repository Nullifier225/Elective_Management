import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { HashRouter, Route,Switch } from 'react-router-dom';    
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
import viewstudentelective from './component/studentviewelective';
import fviewstudentelective from './component/facultyviewelective';
import changemanagement from './component/electivechangemanagement';
// import sendemail from './component/emailtry1';
import printpage from './component/htmlpdfsample';
import { PublicRoute } from "./PublicRoute";
import { StudRoute } from "./StudentRoute";
import aviewstudentelective from './component/AdminFinal'
import { DeptRoute } from "./DepartmentRoute";
import { AdminRoute } from "./AdminRoute";
import axios from 'axios';
import { removeUserSession } from './component/common';
class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
<HashRouter>
        
            <Switch>
            <PublicRoute path="/" component={Login} exact/>
            <StudRoute path="/loginform" component={LoginForm} exact/>
            <StudRoute path="/studentsform" component={StudentForm} exact/>
            <DeptRoute path="/departmentform" component={App1} exact/>
            <StudRoute path="/changeform" component={ChangeForm} exact/>
            <DeptRoute path="/deptdashboard" component={TD} exact/>
            <AdminRoute path="/admindashboard" component={AD} exact/>
            <AdminRoute path="/adminstudentlist" component={adminstudentlist} exact/>
            <AdminRoute path="/viewelectivechange" component={viewelectivechange} exact/>
            <StudRoute path="/feedbackforms" component={Feedbackform} exact/>
            <DeptRoute path="/viewfeedbacks" component={viewfeedback} exact/>
            <Route path="/error" component={errorpage} exact/>
            <AdminRoute path="/management" component={management} exact/>
            <StudRoute path="/tentativelist" component={viewstudentelective} exact/>
            <DeptRoute path="/finallist" component={fviewstudentelective} exact/>
            <AdminRoute path="/afinallist" component={aviewstudentelective} exact/>
            <AdminRoute path="/electivechangemanagement" component={changemanagement} exact/>
            <AdminRoute path="/sendmail" component={sendemail} exact/>
            <Route path="/printpage" component={printpage} exact/>
            <Route path="*" component={()=> "404 NOT FOUND"}/>

            </Switch>
            
</HashRouter>
    )}}
export default App;
