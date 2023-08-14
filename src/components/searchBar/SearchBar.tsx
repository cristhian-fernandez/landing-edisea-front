import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchIcon } from './../icons'
import styles from  './../../styles/SearchBar.module.css';
import { searchChallenges, searchWords, selectCareer } from '../../redux/actions';

const SearchBar = () => {
    const search = useSelector((state:any) => state.searchWords);
    const dispatch:any = useDispatch();
    const [placeholderText, setPlaceholderText] = useState('Buscar por nombre del reto o nombre de la carrera ...');

    useEffect(() => {
      dispatch(searchWords(''));
  }, [dispatch]);

    const onInputChange = (e: any) => {
      dispatch(searchChallenges(e.target.value));
      dispatch(selectCareer(-1));
      dispatch(searchWords(e.target.value));
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