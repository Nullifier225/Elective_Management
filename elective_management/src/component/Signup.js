import React from 'react';

function LoginForm(){
    return(
        <form>
            <div className="form-inner">
                <h2>Login</h2>

                <div classname="form-group">
                    <label htmlfor="name">Name:</label>
                    <input type="text" name="name" id="name"/>

                    
                </div>
                <div classname="form-group">
                    <label htmlfor="email">Roll-no:</label>
                    <input type="text" name="email" id="email"/>

                    
                </div>
                <div classname="form-group">
                    <label htmlfor="password">Password</label>
                    <input type="text" name="password" id="password"/>
                </div>
                </div>
        </form>
    )
}
export default LoginForm;