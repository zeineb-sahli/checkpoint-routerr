import React from 'react'

export default function Shop({ shop }) {
    console.log(shop)
    return (
        <>
            {
                shop.total !== 0 && <div>
                    {shop.articles.map(el => <div>
                        <h1>{el.name}</h1>
                        <h1>{el.qte}</h1>
                    </div>)}
                    <h1>
                        {shop.total}
                    </h1>
                </div>
            }
        </>
    )
}
