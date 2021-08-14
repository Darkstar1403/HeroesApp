import React, {useMemo} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import '../main.css';
export const HeroScreen = ({history}) => {

    const {heroId} = useParams();
    const hero = useMemo(() => getHeroById(heroId),[heroId]);
    if(!hero){
        return <Redirect to='/'/>
    }
    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;

    const handleReturn = () =>{
        if(history.length <= 2){
            (publisher === 'Marvel Comics')?history.push('/marvel'):history.push('/dc')
        }
        else{
            history.goBack();
        }
    }
    return (
        <div className='row mt-5'>
            <div className='col-12 col-sm-6 col-md-5 me-1 me-sm-0'>
                <img className='img-thumbnail animate__animated animate__fadeInLeft animate__faster'  src={`../assets/heroes/${heroId}.jpg`} alt={superhero}/>
            </div>
            <div className='container col-12 col-sm-6 col-md-7 mx-1 mx-sm-0'>
                    <div className='row align-items-start'>
                        <div className='col'>
                            <h3>{superhero}</h3>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                                <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                                <li className='list-group-item'><b>First appearance: </b>{first_appearance}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row align-items-end to-end'>
                        <div className='col'>
                            <h5>Characters</h5>
                            <p>{characters}</p>
                            <button onClick={handleReturn} className='btn btn-outline-info mt-3'>
                                Return
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
