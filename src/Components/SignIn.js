import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

function SignIn({ setUser, user }) {
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ ...user, connect: true })
        navigate('/Profile')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} type="email" placeholder="Enter email" name='email' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Enter name" name='name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignIn