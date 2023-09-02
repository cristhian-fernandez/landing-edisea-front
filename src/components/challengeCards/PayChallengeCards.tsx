import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { CareersProps, ChallengesProps, PayChallengeCardsProps } from "../../types";
import { getAllChallenges } from "../../redux/actions";
import PayChallengeCard from "../challengeCard/PayChallengeCard";
import styles from './../../styles/PayChallengeCards.module.css';
import { ArrowRight, ArrowLeft } from './../icons';


const PayChallengeCards = ({careers, selectCareer}: PayChallengeCardsProps) => {
  const challenges = useSelector((state:any) => state.challenges);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectCareer]);

  const dispatch:any = useDispatch();
  useEffect(() => {
    dispatch(getAllChallenges());
  }, [dispatch]);

  const filteredChallenges = challenges.filter(
    (challenge: ChallengesProps) =>{
      if(String(selectCareer) === '0') return challenge
      return String(challenge.idCareer) === String(selectCareer)
    }
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : filteredChallenges.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < filteredChallenges.length - 1 ? prevIndex + 1 : 0
    );
  };
  
  if ( filteredChallenges && filteredChallenges.length !== 0) {
    const validIndex = Math.max(0, Math.min(currentIndex, filteredChallenges.length - 1));
    const currentChallenge = filteredChallenges[validIndex];
    const currentCareer = currentChallenge
      ? careers.find((career: CareersProps) => career.idCareer === currentChallenge.idCareer)
      : null;
    return (
      <div className={styles.challenge_slider}>
        <button className={styles.arrow_button} onClick={() => handlePrev()}><ArrowLeft/></button>
        <div className={styles.card_container}>
          <PayChallengeCard
              idChallenge={currentChallenge.idChallenge}
              idCareer={currentChallenge.idCareer}
              name={currentChallenge.name}
              description={currentChallenge.description}
              urlImagen={currentChallenge.urlImagen}
              challengeDate={currentChallenge.challengeDate}
              idLeadInstructor={currentChallenge.idLeadInstructor}
              nameCareer={currentCareer?.name}
            />
        </div>
        <button className={styles.arrow_button} onClick={() => handleNext()}><ArrowRight /></button>
      </div>
    )
  } else {
    return (
      <div>
        Cargando retos profesionales ...
      </div>
    )
  }
}

export default PayChallengeCards


