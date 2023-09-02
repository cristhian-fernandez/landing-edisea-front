
import { ChallengesProps } from '../../types'
import styles from './../../styles/ChallengeCard.module.css'

const ChallengeCard = (props: ChallengesProps) => {
  return (
    <>
      {
        props.idChallenge ? (
          <div className={`${styles.card_challenge} ${styles.card_center}`}>
            <div className={styles.card_header}>
              <div className={styles.card_challenge_img}>
                <img src={props.urlImagen} alt={props.name}/>
              </div>
            </div>
            <div className={styles.card_body}>
              <div className={styles.card_challenge_date}>
                {String(props.challengeDate)}
              </div>
              <div className={styles.card_challenge_title}>
                {props.name}
              </div>
              <div className={styles.card_challenge_career}>
                {props.nameCareer && props.nameCareer}
              </div>
            </div>
            <div className={styles.card_footer}>
              {props.instructor ? 
              <>
                <picture className={styles.card_instructor_img}>
                  <img src={props.instructor.urlImagen} alt={props.instructor.name} />
                </picture>
                <div className={styles.card_instructor_name}>
                  {props.instructor.name}
                </div>
              </>: ''}
              
            </div>
          </div>
        ) : ''
      }
    </>
  )
}

export default ChallengeCard