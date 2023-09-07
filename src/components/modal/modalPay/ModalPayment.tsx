import React, { useEffect, useState } from 'react';
import styles from './../../../styles/Modal.module.css';
import {Graduation, Money, Trophy} from './../../icons'
import TabSelectChallenge from '../../tabs/tabsPay/TabSelectChallenge';
import TabSelectPayment from '../../tabs/tabsPay/TabSelectPayment';
import TabConfirmPayment from '../../tabs/tabsPay/TabConfirmPayment';
import { ModalProps } from '../../../types';

const ModalPayment: React.FC<ModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleNext = () => {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrev = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleFinish = () => {
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onClose}>
          <span>x</span>
        </button>
        <div className={styles.tabs}>
          <div className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}>
            <div className={`${styles.circle} ${activeTab >= 1 ? styles.active_circle : ''}`}>
              <span className={styles.tab_icon}><Graduation /></span>
              <span className={`${styles.tab_title} ${activeTab >= 1 ? styles.active_title : ''}`}>Retos</span>
            </div>
            <div className={`${styles.line} ${activeTab > 1 ? styles.active_line : ''}`} />
          </div>
          <div className={`${styles.tab} ${activeTab === 2 ? styles.active : ''}`}>
            <div className={`${styles.circle} ${activeTab >= 2 ? styles.active_circle : ''}`}>
            <span><Money fill={`${activeTab >= 2 ? '#FFFFFF' : ''}`}/></span>
              <span className={`${styles.tab_title} ${activeTab >= 2 ? styles.active_title : ''}`}>Pago</span>
            </div>
            <div className={`${styles.line} ${activeTab > 2 ? styles.active_line : ''}`} />
          </div>
          <div className={`${styles.tab} ${activeTab >= 3 ? styles.active : ''}`}>
            <div className={`${styles.circle} ${activeTab >= 3 ? styles.active_circle : ''}`}>
              <span className={styles.tab_icon}><Trophy fill={`${activeTab >= 3 ? '#FFFFFF' : ''}`}/></span>
              <span className={`${styles.tab_title} ${activeTab >= 3 ? styles.active_title : ''}`}>Confirmado</span>
            </div>
          </div>
        </div>
        <div className={styles.tab_content}>
          {activeTab === 1 && <TabSelectChallenge />}
          {activeTab === 2 && <TabSelectPayment/>}
          {activeTab === 3 && <TabConfirmPayment handleNext={handleNext}/>}
          {activeTab === 4 && 
            <div className={styles.tab_confirm}>
              <p className={styles.confirm_title}>Registro completo</p>
              <p>¡Gracias por confirmar tu registro para Reto de Profesionales! Estamos emocionados de tenerte con nosotros.</p>
              <p>Esperamos que esta experiencia sea enriquecedora y te ayude a avanzar en tu camino hacia tu éxito profesional.</p>
              <p className={styles.confirm_footer}>En breve nos comunicaremos contigo ¡Nos vemos pronto en el Reto!</p>
            </div>
          }
        </div>
        <div className={styles.footer}>
          {activeTab === 1 && <button onClick={handleNext} className={styles.modal_button}>Siguiente</button>}
          {activeTab === 2 && (
            <>
              <button onClick={handlePrev} className={styles.modal_button_prev}>Anterior</button>
              <button onClick={handleNext} className={styles.modal_button}>Ya hice la tranferencia</button>
            </>
          )}
          {activeTab === 3 && (
            <>
              <button onClick={handlePrev} className={styles.modal_button_prev}>Anterior</button>
            </>
          )}
          {activeTab === 4 && (
            <>
              <button onClick={handleFinish} className={styles.modal_button}>Cerrar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalPayment;
