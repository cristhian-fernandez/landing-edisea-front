import React, { useEffect, useState } from 'react';
import styles from './../../../styles/Modal.module.css';
import { ModalTabsProps, Tab } from '../../../types';

const ModalTabs: React.FC<ModalTabsProps> = ({ onClose, tabs, contentComponents, tabsFinished }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleNext = () => {
    if (activeTab < tabs.length) {
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
          {tabs.map((tab: Tab, index: number) => (
            <div key={index} className={`${styles.tab} ${activeTab === index + 1 ? styles.active : ''}`}>
              <div className={`${styles.circle} ${activeTab >= index + 1 ? styles.active_circle : ''}`}>
                {tab.icon}
                {/* <span style={{ fill: "#FFFFFF" }}>{tab.icon}</span> */}
                <span className={`${styles.tab_title} ${activeTab >= index + 1 ? styles.active_title : ''}`}>{tab.title}</span>
              </div>
              {index < tabs.length - 1 && <div className={`${styles.line} ${activeTab > index + 1 ? styles.active_line : ''}`} />}
            </div>
          ))}
        </div>
        <div className={styles.tab_content}>{contentComponents[activeTab - 1]}</div>
        <div className={styles.footer}>
          {activeTab === 1 && !tabsFinished && (
            <>
              {tabs.length > 1 && <button onClick={handleNext} className={styles.modal_button}>Siguiente</button>}
            </>
          )}
          {activeTab > 1 && !tabsFinished && (
            <>
              <button onClick={handlePrev} className={styles.modal_button_prev}>Anterior</button>
            </>
          )}
          {activeTab === tabs.length && !tabsFinished && (
            <>
              <button onClick={handleFinish} className={styles.modal_button}>Cerrar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalTabs;