import { config } from '../../../api/apiConfig';
import { StartIcon, WhatsappIcon } from '../../icons';
import styles from './../../../styles/Sections.module.css'

const Cta = () => {
  const handleWhatsappClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=+${config.NUMBER_WHATSHAPP_MESSAGE}&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20reto%20de%20profesionales.`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <>
      <div className={`${styles.section_plans} ${styles.section_cta}`}>
        <h2 className={styles.section_title}>¿Solo para escolares? ¡Para nada!</h2>
        <h3 className={styles.section_subtitle}>Nuestros retos también están enfocados para universitarios y egresados, ya que el viaje vocacional dura toda la vida.</h3>
      </div>
      <div className={styles.cta_contact}>
        <div className={styles.contact_content}>
          <div className={styles.contact_text}>
            <StartIcon style={{scale: '0.7'}}/>
            <p className={styles.contact_text_phone}>¿Te quedan dudas?</p>
            <p className={styles.contact_text_desktop}>¿Tienes alguna duda?</p>
          </div>
          <button onClick={handleWhatsappClick}>
            <span><WhatsappIcon /></span>  
            <span>Hablemos</span>  
          </button>
        </div>
        <div className={styles.contact_line}></div>
      </div>
    </>
  )
}

export default Cta