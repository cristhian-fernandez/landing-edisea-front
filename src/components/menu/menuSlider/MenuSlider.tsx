import { useState, useEffect, useCallback } from 'react';
import styles from  './../../../styles/Menu.module.css';
import stylesLoader from  './../../../styles/Loader.module.css';
import { ArrowRight, ArrowLeft } from './../../icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCareers, searchChallenges, searchChallengesCareer, searchWords, selectCareer } from './../../../redux/actions';
import { CareersProps } from './../../../types'

const MenuSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleNames, setVisibleNames] = useState(5);
  const allCarrers = useSelector((state:any) => state.carrers);
  const selectedCareer = useSelector((state:any) => state.selectedCareer);
  const dispatch:any = useDispatch();
  useEffect(() => {
      dispatch(getAllCareers());
      dispatch(selectCareer(0));
  }, [dispatch]);

  const handleCareer = (id: number) => {
    dispatch(selectCareer(id));
    dispatch(searchChallenges(''));
    dispatch(searchChallengesCareer(id));
    dispatch(searchWords(''));
  };

  const handleSlide = useCallback((direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > allCarrers.length - visibleNames) {
      newIndex = allCarrers.length - visibleNames;
    }
    setCurrentIndex(newIndex);
  }, [currentIndex, visibleNames, allCarrers]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setVisibleNames(2);
      } else if (screenWidth <= 950) {
        setVisibleNames(3);
      } else if (screenWidth <= 1050) {
        setVisibleNames(4);
      } else {
        setVisibleNames(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.slider_container}>
      <button className={styles.slider_button} onClick={() => handleSlide(-1)}>
        <ArrowLeft/>
      </button>
      <div className={styles.slider_careers}>

        {
          allCarrers && allCarrers.length !== 0 ? (
            allCarrers.slice(currentIndex, currentIndex + visibleNames).map((career: CareersProps) => (
              <div
                key={career.idCareer}
                className={`${styles.career} ${selectedCareer === career.idCareer ? styles.selected_career : ''}`}
                onClick={() => handleCareer(career.idCareer)}
              >
                {career.name}
              </div>
            ))
          ): (
            <div>
              <p>Cargando carreras...</p>
              <div className={stylesLoader.loader_content}>
                <span className={stylesLoader.loader}></span>
              </div>
            </div>
          )
        }
      </div>
      <button className={styles.slider_button} onClick={() => handleSlide(1)}>
        <ArrowRight />
      </button>
    </div>
  );
}

export default MenuSlider