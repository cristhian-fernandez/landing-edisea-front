import InformationEvent from '../../challengeEvent/InformationEvent'
import PaymentEvent from '../../challengeEvent/PaymentEvent'
import styles from './../../../styles/Challengeprofessional.module.css'

const ChallengeProfessional = () => {
  return (
    <div className={styles.container_background}>
      <div className={styles.container_blur}>

      </div>
      <div className={styles.container}>
        <InformationEvent/>
        <PaymentEvent/>
      </div>
    </div>
  )
}

export default ChallengeProfessional