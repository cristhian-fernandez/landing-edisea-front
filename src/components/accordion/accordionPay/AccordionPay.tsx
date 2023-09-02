import React, { useEffect, useState } from 'react';
import styles from './../../../styles/Accordion.module.css';
// import styles from './../../../styles/ModalPayment.module.css';
import { getAllCareers } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PayChallengeCards from '../../challengeCards/PayChallengeCards';

const AccordionPay: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const allCareers = useSelector((state:any) => state.carrers);
  const [selectedCareer, setSelectedCareer] = useState<number>(0);
  const dispatch:any = useDispatch();
  useEffect(() => {
    dispatch(getAllCareers());
  }, [dispatch]);

  const handleCareerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setSelectedCareer(selectedId);
  };

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.accordion}>
      <div className={`${styles.accordion_item} ${activeIndex === 0 ? styles.active : ''}`}>
        <div className={styles.accordion_title} onClick={() => toggleAccordion(0)}>Seleccionar Retos Profesionales</div>
        <div className={styles.accordion_content}>
          <div className={styles.tab_content}>
            <div className={styles.tab_content_row}>
              <label htmlFor="careerSelect" className={styles.tab_content_label}>Elegir carrera: </label>
              <select id="careerSelect" onChange={handleCareerChange} className={styles.tab_content_select} value={selectedCareer || ''}>
                {allCareers.map((career:any) => (
                  <option key={career.idCareer} value={career.idCareer}>
                    {career.name}
                  </option>
                ))}
              </select>
            </div>
            <PayChallengeCards careers={allCareers} selectCareer={selectedCareer}/>
          </div>
        </div>
      </div>
      <div className={`${styles.accordion_item} ${activeIndex === 1 ? styles.active : ''}`}>
        <div className={styles.accordion_title} onClick={() => toggleAccordion(1)}>Item 2</div>
        <div className={styles.accordion_content}>Contenido del Item 2</div>
      </div>
      <div><h3>Holaa</h3></div>
      <div className={`${styles.accordion_item} ${activeIndex === 2 ? styles.active : ''}`}>
        <div className={styles.accordion_title} onClick={() => toggleAccordion(2)}>Item 3</div>
        <div className={styles.accordion_content}>Contenido del Item 3</div>
      </div>
    </div>
  );
};

export default AccordionPay;
