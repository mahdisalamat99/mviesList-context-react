import React,{useContext} from 'react';
import './Nav.css';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        <div className='nav-bar'>
            <h3>Mahdi Salamat</h3>
            <p>List of Movies:{movies.length}</p>
        </div>
    )
}

export default Nav;