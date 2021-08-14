import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { GetHeroesByName } from '../../selectors/GetHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [{search}, handleInputChange] = useForm({search: q});

    const heroesFiltered = useMemo(() => GetHeroesByName(q), [q]);

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${search}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <form onSubmit={handleSearch}>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <input
                                        type='text'
                                        placeholder = 'Find your superhero'
                                        className='form-control m-1'
                                        autoComplete='off'
                                        value={search}
                                        onChange={handleInputChange}
                                        name='search'
                                    />
                                </div>
                                <div className='col-12 col-md-6'>
                                    <button
                                        type='submit'
                                        className='btn m-1 w-100 btn-outline-primary'
                                    >
                                        Search...
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-12'>
                        <h4>Results</h4>
                        <hr/>
                        {(q === '') && <div className='alert alert-info animate__animated animate__pulse'>
                            Search a hero
                        </div>}
                        {(q !== '' && heroesFiltered.length === 0) && <div className='alert alert-danger animate__animated animate__shakeX'>
                            There is no a hero with {q}
                        </div>}
                        <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4'>
                        {
                            heroesFiltered.map(hero =>(
                                <HeroCard 
                                    key={hero.id}
                                    hero={hero}
                                />
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
