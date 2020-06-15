import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import {connect} from "react-redux";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.height=React.createRef()
       }
       componentDidMount(){
        this.props.setHeight(this.height.current.scrollHeight);
       }
       render(){
        return (
            <Navbar ref={this.height} style={{padding:1,paddingLeft:6}} bg="dark" variant="dark">
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

const mapDispatchToProps=(dispatch)=>({
    setHeight:(val)=>dispatch({type:"GETHEIGHT",payload:val})
})

export default connect(null,mapDispatchToProps)(Header);