import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'



function CardComponents({ products, user }) {
    const cardStyle = {
        background: 'white',
        boxShadow: '12px 10px 11px 13px ',
    }
    const navigate = useNavigate()
    const handleNavigate = () => {
        if (!user.connect) {
            window.confirm('you shoul connect before')
            navigate('/SignIn')
        }

        if (user.connect) {
            navigate(`/Details/${products.id} `)
            
        }

    }
    return (
        <div stle={cardStyle}>
            <img src={products.image} alt={products.name} />
            <h1>{products.name}</h1>
            <Button variant="outline-success" onClick={handleNavigate}>Details</Button>
        </div>
    )
}

export default CardComponents