import styles from './../../styles/Challengeprofessional.module.css'
import reto_psicologia from './../../assets/reto_psicologia.jpeg';

const InformationEvent = () => {
  return (
    <div>
      <picture>
        <img src={reto_psicologia} alt="reto_psicologia" />
      </picture>
      <div className={styles.event_description}>
        <h2>Reto de Profesionales - Psicología</h2>
        <p>¡No! No solo hacemos terapias. Los psicólogos tienen chamba en muchos lados (en equipos de futbol, en una empresa, en colegios). Podemos conocer ese mundo en una competencia.</p>
      </div>
    </div>
  )
}

export default InformationEvent