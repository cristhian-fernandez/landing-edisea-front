import { config } from '../../../api/apiConfig';
import styles from './../../../styles/Sections.module.css'

const Cta = () => {
  const handleWhatsappClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=+${config.NUMBER_WHATSHAPP}&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20reto%20de%20profesionales.`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <div className={`${styles.section_plans} ${styles.section_cta}`}>
      <h2 className={styles.section_title}>¿Solo para escolares? ¡Para nada!</h2>
      <h3 className={styles.section_subtitle}>Nuestros retos también están enfocados para universitarios y egresados, ya que el viaje vocacional dura toda la vida.</h3>
      <div className={styles.cta_contact}>
        <p>¿Te quedan dudas?</p>
        <button onClick={handleWhatsappClick}>Contáctanos</button>
      </div>
    </div>
  )
}

export default Cta