import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({hero}) => {
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;
    return (
    <div className="card mb-3 animate__animated animate__fadeIn" style={{maxWidth:540}}>
        <div className="row g-0">
            <div className="col-md-4">
               <img src={`./assets/heroes/${id}.jpg`} alt={superhero} className='card-img'/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {
                        (alter_ego !== characters) &&
                        <p className="card-text">{characters}</p>
                    }
                    <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                    <Link className={`btn ${(publisher==='Marvel Comics')?'btn-outline-danger':'btn-outline-primary'}`} to={`./hero/${id}`}>
                        Más...
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
