import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, FormControl, Dropdown, Badge, Nav } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import "./header.css"

export default function Header() {
    return (
        <div className='headerWrapper '>
            <Navbar bg="dark" variant="dark" fixed="fixed" >
                <Container>
                    <Navbar.Brand className= "Brand">
                        <Link href="/">Shoping Cart</Link>
                    </Navbar.Brand>
                    <Navbar.Text className='search ' style = {{width:"500px", minWidth:"200px", marginRight:"10px"}}>
                        <FormControl type="text" placeholder="Search Product"  />
                    </Navbar.Text>
                    <Nav>
                        <Dropdown alignStart  className='toggle'>
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart color="white" fontSize="25px" />
                                <Badge bg="success">{0}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ minWidth: 370 }}>
                                <span style={{ padding: 10 }}>Cart is Empty</span>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
