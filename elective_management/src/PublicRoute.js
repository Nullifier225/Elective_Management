import React from "react";
import { Component } from "react";
import {Route, Redirect } from "react-router-dom";
import { getToken } from "./component/common";
import Login from "./component/login"

export const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render ={props => {
            //alert(JSON.stringify(props))
            //alert(auth.isAuthenticated())
            var temp = getToken()
            if(temp){
                return <Redirect to = {{pathname: "/loginform", state:{from: props.location}}}/>
                
            }else{
                return <Component {...props}/>
            }
                
        }}/>
    );
}