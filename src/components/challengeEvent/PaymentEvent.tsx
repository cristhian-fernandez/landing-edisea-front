import { useState, useEffect } from 'react';
import styles from './../../styles/Challengeprofessional.module.css'
import { ArrowBottom } from '../icons';
import { getAllCoupons, getPaymentMake, getValidCoupon } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ModalPayment from '../modal/modalPay/ModalPayment';

const PaymentEvent = () => {
  const coupons = useSelector((state:any) => state.coupons);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [textCoupon, setTextCoupon] = useState<string>('');
  const [isValidCoupon, setIsValidCoupon] = useState<boolean>(false);
  const [isMessageCoupon, setIsMessageCoupon] = useState<boolean>(false);
  const paymentMake = useSelector((state:any) => state.paymentMake);
  const toggleAccordion = () => {
    setActiveIndex(activeIndex === 0 ? 1 : 0);
  };

  const dispatch:any = useDispatch();
  useEffect(() => {
    dispatch(getAllCoupons());
    dispatch(getPaymentMake(29));
  }, [dispatch]);

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextCoupon(e.target.value);
    setIsMessageCoupon(false)
  };

  const checkCoupon = () => {
    const enteredCoupon = textCoupon.toLowerCase();
    const lowercaseCoupons = coupons.map((coupon:string) => coupon.toLowerCase());
    const isValid = lowercaseCoupons.includes(enteredCoupon);
    setIsValidCoupon(isValid);
    setIsMessageCoupon(true);
    isValid ? dispatch(getPaymentMake(19)) : dispatch(getPaymentMake(29)) 
    isValid ? dispatch(getValidCoupon(textCoupon)) : dispatch(getValidCoupon('')) 
  }

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.payment_event}>
      <div className={styles.payment_event_date}>
        <div>
          <p className={styles.event_date_label}>Fecha</p>
          <p>Sábado 25 de Noviembre, 2023</p>
        </div>
        <div>
          <p className={styles.event_date_label}>Horario</p>
          <p>05:00 PM</p>
        </div>
      </div>
      <div className={styles.payment_event_benefits}>
        <p className={styles.title}>Beneficios</p>
        <div className={styles.event_benefits_items}>
          <span>En vivo y directo por zoom</span>
          <span>Simulación de Experiencias Laborales</span>
          <span>Competencia de Profesionales</span>
          <span>Slam de Profesionales</span>
          <span className={styles.benefits_item_labeled}>Precio Normal: S/ 39.00</span>
        </div>
      </div>
      <div className={styles.payment_event_discount}>
        <div className={styles.accordion_title} onClick={toggleAccordion}>
          <p className={styles.title}>Códigos de descuento</p>
          <span className={`${activeIndex !== 1 ? styles.accordion_icon_rotate : ''}`}>
            <ArrowBottom fill={'#273b49'}/>
          </span>
        </div>
        <div className={`${styles.accordion_item} ${activeIndex === 0 ? styles.active : ''}`}>
          <p className={styles.discount_title}>Ingresa tu código de descuento</p>
          <div className={styles.discount_code}>
            <input 
              type="text" 
              className={styles.discount_input}
              value={textCoupon}
              onChange={handleCouponChange}
            />
            <button className={styles.discount_button} onClick={checkCoupon}>Aplicar</button>
          </div>
          <div className={`${styles.accordion_item} ${isMessageCoupon ? styles.active : ''}`}>
            <p className={styles.discount_message}>{isValidCoupon ? <span>* Cupón válido</span> : <span className={styles.discount_message_error}>* Cupón expirado ó inválido</span>}</p>
          </div>
        </div>
      </div>
      <div className={styles.plans_card__price}>
        <span>S/</span>
        <span className={styles.card_price__quantity}>{paymentMake}</span>
        <span className={styles.card_price__zeros}>.00</span>
        <div className={`${styles.accordion_item} ${isValidCoupon ? styles.active : ''}`}>
          <span className={styles.card_price__previous}>S/ 29.00</span>
        </div>
      </div>
      <div className={styles.payment_event_button}>
        <button className={styles.event_button} onClick={openModal}>
          Participar
        </button>
        {modalVisible && <ModalPayment onClose={closeModal} />}
      </div>
    </div>
  )
}

export default PaymentEvent