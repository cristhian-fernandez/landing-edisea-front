import { useState } from 'react';
import styles from './../../../styles/Sections.module.css'
import ModalPayment from '../../modal/modalPay/ModalPayment';

const Plans = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onSelected = () => {
    console.log('Seleccionar Pago')
  }
  return (
    <div className={styles.section_plans}>
      <h2 className={styles.section_title}>Elige un plan</h2>
      <h3 className={styles.section_subtitle}>Ahorra con el pago por acceso ilimitado y accede a todos los retos y contenido exclusivos</h3>
      <div className={styles.plans_cards}>
        <div className={styles.plans_card}>
          <h3 className={styles.plans_card__title}>Pago por Reto</h3>
          <div className={styles.plans_card__price}>
            <span>S/</span>
            <span className={styles.card_price__quantity}>19</span>
            <span className={styles.card_price__zeros}>.00</span>
            <span>por Reto</span>
          </div>
          <div className={styles.plans_card__content}>
            <span>Retos en vivo por zoom</span>
            <span>Pagas por el reto escogido</span>
          </div>
          <button onClick={openModal} className={styles.plans_card__button}>Seleccionar pago</button>
          {modalVisible && <ModalPayment onClose={closeModal} />}
        </div>
        <div className={styles.plans_card}>
          <h4 className={styles.plans_card__subtitle}>Recomendado</h4>
          <h3 className={styles.plans_card__title}>Pago Acceso Ilimitado</h3>
          <div className={styles.plans_card__price}>
            <span>S/</span>
            <span className={styles.card_price__quantity}>59</span>
            <span className={styles.card_price__zeros}>.00</span>
            <span>por Reto</span>
          </div>
          <div className={styles.plans_card__content}>
            <span>Retos en vivo por zoom</span>
            <span>Acceso a todos los retos profesionales del año</span>
            <span>Acceso a eventos exclusivos</span>
          </div>
          <button onClick={onSelected} className={styles.plans_card__button}>Seleccionar pago</button>
        </div>
      </div>
    </div>
  )
}

export default Plans