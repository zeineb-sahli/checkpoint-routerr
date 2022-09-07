
import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'

function DetailsItem({ listProducts, shop, setShop }) {
    console.log(listProducts)
    const back = '<<<'
    const params = useParams()
    console.log(params)
    const detail = listProducts.find(el => el.id == params.id)
    console.log(detail)



    const handleClick = () => {
        const addArticle = { ...detail, qte: 1 }
        const existItem = shop.articles.find(el => el.id == addArticle.id)
        if (!existItem) {
            setShop({ articles: [...shop.articles, addArticle], total: shop.total + addArticle.price })
        }
        if (existItem) {
            setShop({
                articles: shop.articles.map((el) => {
                    if (el.id == addArticle.id) {
                        return { ...el, qte: el.qte + 1 }
                    }
                    else {
                        return el
                    }
                })
                , total: shop.total + addArticle.price
            })
        }

    }


    return (
        <div>
            <img src={detail.image} alt={detail.image} />
            <h1>{detail.name}</h1>
            <h5>{detail.price}dt</h5>
            <Link to='/'> <Button variant="outline-primary" >{back}</Button></Link>
            <Button onClick={handleClick}>Add to cart </Button>

        </div>
    )
}
export default DetailsItem