import styles from './../../../styles/Sections.module.css'

const Cta = () => {
  return (
    <div className={`${styles.section_plans} ${styles.section_cta}`}>
      <h2 className={styles.section_title}>¿Solo para escolares? ¡Para nada!</h2>
      <h3 className={styles.section_subtitle}>Nuestros retos también están enfocados para universitarios y egresados, ya que el viaje vocacional dura toda la vida.</h3>
      <div className={styles.cta_contact}>
        <p>¿Te quedan dudas?</p>
        <button>Contáctanos</button>
      </div>
    </div>
  )
}

export default Cta