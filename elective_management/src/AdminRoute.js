import React from "react";
import { Component } from "react";
import {Route, Redirect } from "react-router-dom";
import { getRole, getToken } from "./component/common";
import Login from "./component/login"

export const AdminRoute = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render ={props => {
            //alert(JSON.stringify(props))
            //alert(auth.isAuthenticated())
            var temp = getToken();
            var role = getRole();
            if(temp){
                if(role=="admin"){
                    return <Component {...props}/>
                }
                else{
                    alert("You are not authenticated to view this page!")
                    props.history.goBack();
                }
            }
            else{
                alert("You are logged out! Please login to continue!");
                return <Redirect to = {{pathname: "/", state:{from: props.location}}}/>
            }
                
        }}/>
    );
}