import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";


export default class Header extends React.Component{
    constructor(props){
        super(props);
       }
       render(){
        return (
            <Navbar style={{padding:5}} bg="dark" variant="dark">
                <Navbar.Brand href="#home">LetCode</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
)
}
}