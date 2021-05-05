import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllBerries } from '../helpers/berriesHelper';

export const BerriesScreen = () => {
    
    const [berries, setBerries] = useState([]);


    const [nextPage, setNextPage] = useState('');

    const [previousPage, setPreviousPage] = useState('');

    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/berry?offset=0&limit=20');

    useEffect(() => {
        getAllBerries(currentPage).then(resp => {
            setBerries(resp.results);
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
            <h1>Berries</h1>
            <div className="list-group">
                {
                    berries.map(berry => (
                        <Link to={`berries/${ berry.name }`}>
                            <a className="list-group-item list-group-item-action" key={berry.name}>{berry.name}</a>
                        </Link>
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
