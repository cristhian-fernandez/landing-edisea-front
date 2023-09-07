import styles from './../../../styles/Sections.module.css'

const Benefits = () => {
  return (
    <div className={styles.section_benefits}>
      <h2 className={`${styles.section_title} ${styles.underline}`}>Somos diferentes</h2>
      <h3 className={styles.section_subtitle}>Te damos las herramientas para que tomes una mejor decisión</h3>
      <div className={styles.benefits_cards}>
        <div className={styles.benefits_card}>
          <h3 className={styles.benefits_card__title}><span className={styles.card_title__text}>Experiencias</span></h3>
          <span>Los retos profesionales son experiencias virtuales que brinda la oportunidad de enfrentarte a situaciones reales de trabajo.</span>
        </div>
        <div className={`${styles.benefits_card} ${styles.center_card}`}>
          <h3 className={styles.benefits_card__title}><span className={styles.card_title__text}>Exploración</span></h3>
          <span>Explora todas las opciones de carreras que crees necesarias y obtén toda la información antes de tomar una decisión.</span>
        </div>
        <div className={styles.benefits_card}>
          <h3 className={styles.benefits_card__title}><span className={styles.card_title__text}>Conexiones</span></h3>
          <span>Conéctate con profesionales que han elegido un camino similar al tuyo y obtén respuestas directas a todas tus dudas.</span>
        </div>
      </div>
    </div>
  )
}

export default Benefits