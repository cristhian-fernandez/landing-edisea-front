import styles from './../../../styles/Sections.module.css'
import apiCarrousel from './../../../api/apiCarrousel.json'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataCarrousel } from './../../../redux/actions';


const Information = () => {
  const dataCarrousel = useSelector((state:any) => state.dataCarrousel);
  const dispatch:any = useDispatch();
  useEffect(() => {
      dispatch(getDataCarrousel());
  }, [dispatch]);

  return (
    <div className={styles.section_information}>
      <h2 className={`${styles.section_title} ${styles.underline}`}>Una oportunidad que cambia tu vida</h2>
      <h3 className={styles.section_subtitle}>¿Qué quieres lograr?</h3>
      {
        dataCarrousel && Object.entries(dataCarrousel).length !== 0 && (
          <div className={styles.information_carrousel}>
            <div className={styles.carrousel_data}>
              <div className={styles.carrousel_train}>
                {dataCarrousel.rowOne.map((el:string, index:number) => (
                  <span key={index}>{el}</span>
                ))}
              </div>
              {/* Clona los elementos para que aparezcan al final como un tren que va en círculo */}
              <div className={styles.carrousel_train}>
                {dataCarrousel.rowOne.map((el:string, index:number) => (
                  <span key={index + dataCarrousel.rowOne.length}>{el}</span>
                ))}
              </div>
            </div>

            <div className={styles.carrousel_data}>
              <div className={styles.carrousel_train_reverse}>
                {apiCarrousel.data.rowTwo.map((el, index) => (
                  <span key={index}>{el}</span>
                ))}
              </div>
              <div className={styles.carrousel_train_reverse}>
                {apiCarrousel.data.rowTwo.map((el, index) => (
                  <span key={index + apiCarrousel.data.rowOne.length}>{el}</span>
                ))}
              </div>
            </div>

            <div className={styles.carrousel_data}>
              <div className={styles.carrousel_train}>
                {apiCarrousel.data.rowThree.map((el, index) => (
                  <span key={index}>{el}</span>
                ))}
              </div>
              <div className={styles.carrousel_train}>
                {apiCarrousel.data.rowThree.map((el, index) => (
                  <span key={index + apiCarrousel.data.rowOne.length}>{el}</span>
                ))}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Information;


