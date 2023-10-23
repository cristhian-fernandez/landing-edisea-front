import { ButtonCallProps } from '../../types';
import styles from './../../styles/Button.module.css';

const ButtonCall: React.FC<ButtonCallProps> = ({ title, onClick, icon }) => {
  return (
    <div className={styles.button_border} onClick={onClick}>
      <button className={styles.button_call} >
        {icon} {title}
      </button>
    </div>
  );
}

export default ButtonCall;