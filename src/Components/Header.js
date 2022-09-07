import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom"

function Header({ user, setUser }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
        setUser({ ...user, connect: false })
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/'><Button variant="outline-primary">List</Button></Link>
                    {!user.connect ? (<Link to='/SignIn'><Button variant="outline-primary">Connect</Button></Link>)
                        : (<Button onClick={handleClick} variant="outline-danger">logout</Button>)}
                </Container>
            </Navbar>
        </div>
    )
}
export default Header