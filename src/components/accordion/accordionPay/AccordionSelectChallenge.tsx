import React, { useEffect, useState } from 'react';
import styles from './../../../styles/Accordion.module.css';
import { getAllCareers, removeToCart } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PayChallengeCards from '../../challengeCards/PayChallengeCards';
import { ChallengesProps } from '../../../types/index';
import {AddCircle, ArrowBottom} from '../../icons';
import AccordionSummary from './AccordionSummary';

const AccordionSelectChallenge: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const allCareers = useSelector((state:any) => state.carrers);
  const [selectedCareer, setSelectedCareer] = useState<number>(0);
  const cart = useSelector((state:any) => state.cart);
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
      setActiveIndex(activeIndex === 0 ? 1 : 0);
    } else {
      setActiveIndex(index);
    }
  };

  const onClickDelete = (index: number) => {
    dispatch(removeToCart(index));  
  }

  return (
    <div className={styles.accordion}>
      <div className={`${styles.accordion_item} ${activeIndex === 0 ? styles.active : ''}`}>
        <div className={styles.accordion_title} onClick={() => toggleAccordion(0)}>
          <p>Seleccionar Retos Profesionales</p>
          <span className={`${activeIndex !== 0 ? styles.accordion_icon_rotate : ''}`}>
            <ArrowBottom fill={`${activeIndex !== 0 ? '#b7c1c8' : '#273b49'}`}/>
          </span>
        </div>
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

      <AccordionSummary />

      <div className={`${styles.accordion_item} ${activeIndex === 1 ? styles.active : ''}`}>
        <div className={styles.accordion_title} onClick={() => toggleAccordion(1)}>
          <p>Retos seleccionados</p>
          <span className={`${activeIndex !== 1 ? styles.accordion_icon_rotate : ''}`}>
            <ArrowBottom fill={`${activeIndex !== 1 ? '#b7c1c8' : '#273b49'}`}/>
          </span>
        </div>
        <div className={styles.accordion_content}>
          <div className={styles.content_challenge_selected}>
            {
              cart.map((challenge:ChallengesProps) => {
                return(
                  <div className={styles.item_challenge_selected} key={challenge.idChallenge}>
                    <div className={styles.challenge_selected_add}>
                      <span><AddCircle fill='#5f5cff'/></span>
                      <div className={styles.challenge_selected_description}>
                        <h3>{challenge.name}</h3>
                        <span>{challenge.nameCareer}</span>
                      </div>
                    </div>
                    <div className={styles.challenge_selected_remove} onClick={()=> {onClickDelete(challenge.idChallenge)}}><span >x</span></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionSelectChallenge;
