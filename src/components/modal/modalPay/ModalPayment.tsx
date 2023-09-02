import React, { useState } from 'react';
import styles from './../../../styles/Modal.module.css';
import {Graduation, Money, Trophy} from './../../icons'
import TabSelectChallenge from '../../tabs/tabsPay/TabSelectChallenge';

interface ModalProps {
  onClose: () => void;
}

const ModalPayment: React.FC<ModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleNext = () => {
    if (activeTab < 3) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrev = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const guardaDatos = () => {
    console.log('finnnn');
  };

  const handleFinish = () => {
    guardaDatos();
    onClose();
  };

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
          <div className={`${styles.tab} ${activeTab === 3 ? styles.active : ''}`}>
            <div className={`${styles.circle} ${activeTab >= 3 ? styles.active_circle : ''}`}>
              <span className={styles.tab_icon}><Trophy fill={`${activeTab >= 3 ? '#FFFFFF' : ''}`}/></span>
              <span className={`${styles.tab_title} ${activeTab >= 3 ? styles.active_title : ''}`}>Confirmado</span>
            </div>
          </div>
        </div>
        <div className={styles.tab_content}>
          {activeTab === 1 && <TabSelectChallenge />}
          {activeTab === 2 && <p>Contenido del Tab 2</p>}
          {activeTab === 3 && <p>Contenido del Tab 3</p>}
        </div>
        <div className={styles.footer}>
          {activeTab === 1 && <button onClick={handleNext}>Siguiente</button>}
          {activeTab === 2 && (
            <>
              <button onClick={handlePrev}>Anterior</button>
              <button onClick={handleNext}>Siguiente</button>
            </>
          )}
          {activeTab === 3 && (
            <>
              <button onClick={handlePrev}>Anterior</button>
              <button onClick={handleFinish}>Finalizar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalPayment;
