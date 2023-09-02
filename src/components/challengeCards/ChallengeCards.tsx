import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCareers, getAllChallenges, getAllInstructors } from "./../../redux/actions";
import { CareersProps, ChallengeCardsProps, ChallengesProps, InstructorsProps } from '../../types/index';
import ChallengeCard from "../challengeCard/ChallengeCard";
import styles from './../../styles/ChallengeCards.module.css'


const ChallengeCards = ({tabsChallenge}: ChallengeCardsProps) => {
  const challenges = useSelector((state:any) => state.challenges);
  const search = useSelector((state:any) => state.search);
  const allCareers = useSelector((state:any) => state.carrers);
  const allInstructors = useSelector((state:any) => state.instructors);
  const currentMonth = new Date().getMonth();

  const dispatch:any = useDispatch();
  useEffect(() => {
      dispatch(getAllChallenges());
      dispatch(getAllCareers());
      dispatch(getAllInstructors());
  }, [dispatch]);

  const filteredChallenges = challenges.filter(
    (challenge: ChallengesProps) =>{
      if(tabsChallenge === 0) return challenge.startDate && new Date(challenge.startDate).getMonth() === currentMonth && challenge.active
      if(tabsChallenge === 1) return challenge.startDate && new Date(challenge.startDate).getMonth() > currentMonth && challenge.active
      return null
    }
  );

  if ( filteredChallenges && filteredChallenges.length !== 0) {
    return (
      <div className={styles.cards_challenge}>
        {
          filteredChallenges && filteredChallenges.map((challenge: ChallengesProps) => {
            const career = allCareers.find((career: CareersProps) => career.idCareer === challenge.idCareer)
            const instructor = allInstructors.find((instructor: InstructorsProps) => instructor.idInstructor === challenge.idLeadInstructor)
            return (
              <ChallengeCard 
                key={challenge.idChallenge}
                idChallenge={challenge.idChallenge}
                idCareer={challenge.idCareer}
                name={challenge.name}
                description={challenge.description}
                urlImagen={challenge.urlImagen}
                challengeDate={challenge.challengeDate}
                idLeadInstructor={challenge.idLeadInstructor}
                nameCareer={career.name}
                instructor={instructor}
              />
            )
          })
        }
      </div>
    )
  } else {
    if ( challenges && challenges.length === 0 && search) {
      return (
        <div>
          <h2>Sin resultado ...</h2>
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
}

export default ChallengeCards