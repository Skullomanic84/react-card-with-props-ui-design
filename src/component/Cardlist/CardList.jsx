import React from 'react'
import Card from '../Card/Card'
import './Cardlist.css'

function CardList() {
    return (
        <div className="Wrapper">
            <Card
                img ="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                title ='The everyday Salad'
                info = 'Take your boring salad up a knotch. This recipe is perfect for lunch and contains 5 ingredients!' />

                <Card
                img ='https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1448&q=80'
                title ='Simple Risotto'
                info = 'Fear Risotto no more! This recipe is perfect for a family dinner'  />

                <Card
                img ='https://images.unsplash.com/photo-1575835638288-74138ce93c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80'
                title ='Baked Cod with veggies'
                info = 'Baked Cods with Vegetables. 30 minutes meal!' />
        </div>
    )
}

export default CardList
