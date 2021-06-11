import React from "react";
import { Component } from "react";
import {Route, Redirect } from "react-router-dom";
import { getRole, getToken } from "./component/common";
import Login from "./component/login"

export const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render ={props => {
            //alert(JSON.stringify(props))
            //alert(auth.isAuthenticated())
            var temp = getToken()
            var role = getRole()
            if(temp){
                if (role=="stud"){
                    return <Redirect to = {{pathname: "/loginform", state:{from: props.location}}}/>
                }
                if (role=="dept"){
                    return <Redirect to = {{pathname: "/deptdashboard", state:{from: props.location}}}/>
                }
                if (role=="admin"){
                    return <Redirect to = {{pathname: "/admindashboard", state:{from: props.location}}}/>
                }
                
            }else{
                return <Component {...props}/>
            }
                
        }}/>
    );
}