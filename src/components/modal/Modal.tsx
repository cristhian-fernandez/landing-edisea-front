import styles from './../../styles/Modal.module.css';
import { ModalProps } from '../../types';

const Modal: React.FC<ModalProps> = ({ onClose, content }) => {

  const handleFinish = () => {
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onClose}>
          <span>x</span>
        </button>
        <p className={styles.modal_title}>Una oportunidad que cambia tu vida</p>
        <p>{content}</p>
        <div className={styles.footer}>
          <button onClick={handleFinish} className={styles.modal_button}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
