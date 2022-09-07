import React from 'react'
import CardComponents from './CardComponents'


function List({ listProducts, setListProducts, user }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
            {listProducts.map(el => <CardComponents key={el.id} products={el} user={user} />)}
        </div>
    )
}

export default List