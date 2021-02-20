import React from 'react';
import Card from "react-bootstrap/Card";
// import ReactDOM from "react-dom";
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'


function LoginForm() {
    return (
    <div class="Dashboard_Card" className = "d-flex justify-content-center align-items-center">
    <Card style={{ width: '18rem' }}>
         <Card.Body>
        <Card.Text>
        <header> Hi User @username!!! </header>
                <button class ="button" type="submit" className="btn btn-info btn-lg btn-block">Apply</button>
                <button class="button" type="button" className="btn btn-info btn-lg btn-block">Change</button>
        </Card.Text>
    </Card.Body>
    </Card>
    </div>

    )
}
export default LoginForm;