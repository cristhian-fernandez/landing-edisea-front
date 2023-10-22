import { ButtonCallProps } from '../../types';
import styles from './../../styles/Button.module.css';

const ButtonCall: React.FC<ButtonCallProps> = ({ title, onClick, icon }) => {
  return (
    <div className={styles.button_border}>
      <button className={styles.button_call} onClick={onClick}>
        {icon} {title}
      </button>
    </div>
  );
}

export default ButtonCall;