import React from 'react'
import './Card.css'

function Card({ img, title, info }) {
    return (
        <div className='card'>
           <div className="card__body">
                <img src={img} alt="" className="card__image" />
                <h2 className="card__title">{title}</h2>
                <p className="card__info">{info}</p>
           </div>
           <button className="card__btn">Veiw Recipe</button>
        </div>
    )
}

export default Card
