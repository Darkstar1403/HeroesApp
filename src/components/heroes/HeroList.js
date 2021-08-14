import React, { useMemo } from 'react'
import {getHeroesByPublisher} from '../../selectors/getHeroesByPublisher'
import PropTypes from 'prop-types';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className={`row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 animate__animated animate__${
           (publisher==='Marvel Comics')?'fadeInLeft':'fadeInRight'
        }`}>
            {
                heroes.map(hero =>(
                    <HeroCard key={hero.id} hero={hero}/>
                ))
            }
        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}
