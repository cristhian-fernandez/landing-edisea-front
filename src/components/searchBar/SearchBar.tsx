import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { SearchIcon } from './../icons'
// import { searchTests, searchTestsExamen } from '../../redux/actions/actions';
import styles from  './../../styles/SearchBar.module.css';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    // const dispatch = useDispatch();
    const [placeholderText, setPlaceholderText] = useState('Buscar por nombre del reto o nombre de la carrera ...');

    const onInputChange = (e: any) => {
        // dispatch(searchTests(search));
        setSearch(e.target.value);
        console.log('onInputChange',e.target.value)
    }

    useEffect(() => {
        const updatePlaceholderText = () => {
          if (window.innerWidth < 600) {
            setPlaceholderText('Buscar por nombre de reto o carrera ...');
          } else {
            setPlaceholderText('Buscar por nombre del reto o nombre de la carrera ...');
          }
        };
    
        updatePlaceholderText();
    
        window.addEventListener('resize', updatePlaceholderText);
    
        return () => {
          window.removeEventListener('resize', updatePlaceholderText);
        };
      }, []);

    return (
        <div>
            <div className={styles.searchBar}>
                <div className={styles.input_icon}>
                    <SearchIcon />
                </div>
                <input type="text" name='search' value={search} placeholder= {placeholderText} onChange={onInputChange} className={styles.input_text}/>
            </div>
        </div>
    );
}

export default SearchBar;