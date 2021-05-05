import React, { useEffect, useState } from 'react'
import { getAllAbilities } from '../helpers/abilitiesHelper';

export const AbilitiesScreen = () => {


    const [abilities, setAbilities] = useState([]);


    const [nextPage, setNextPage] = useState('');

    const [previousPage, setPreviousPage] = useState('');

    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/ability?offset=0&limit=20');

    useEffect(() => {
        getAllAbilities(currentPage).then(resp => {
            setAbilities(resp.results);
            setNextPage(resp.next);
            setPreviousPage(resp.previous);
            window.scroll(0,0)
        });
    }, [currentPage]);

    const handleNext = () => {
        setCurrentPage(nextPage);
    }

    const handlePrevious = () => {
        setCurrentPage(previousPage);
    }


    return (
        <>
            <h1>Abilities</h1>
            <div className="list-group">
                {
                    abilities.map(ability => (
                        <a className="list-group-item list-group-item-action" key={ability.name}>{ability.name}</a>
                    ))
                }
            </div>
            <div className="row justify-content-center">
                <nav aria-label="...">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${ !previousPage ? 'disabled' : '' }`} onClick={ handlePrevious } disabled={previousPage}>
                            <a className="page-link" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className={`page-item ${ !nextPage ? 'disabled' : '' }`} onClick={ handleNext } disabled={nextPage}>
                            <a className="page-link">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
