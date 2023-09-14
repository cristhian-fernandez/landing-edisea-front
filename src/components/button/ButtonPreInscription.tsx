import styles from './../../styles/Button.module.css';
import { useNavigate } from 'react-router-dom';
const ButtonPreInscription = (props: any) => {
  const navigate = useNavigate();
  const redirectToPreInscription = () => {
    navigate('/pre-inscripcion');
}
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.button_preinscription}`} onClick={redirectToPreInscription}>
          {props.titleButton}
      </button>  
    </div>
  );
}

export default ButtonPreInscription;