import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPayment, getPreSalePayment, getRegularPayment } from '../../../utils/formatData';
import styles from './../../../styles/Accordion.module.css';
import { getAllPayment, getPaymentMake } from '../../../redux/actions';


const AccordionSummary = () => {
  const cart = useSelector((state:any) => state.cart);
  const payments = useSelector((state:any) => state.payments);
  const [isPresale, setIsPresale] = useState(false)
  const currentDate = new Date();

  const dispatch:any = useDispatch();
  useEffect(() => {
    dispatch(getAllPayment());
  }, [dispatch]);

  useEffect(() => {
   
    if (typeof payments === 'object' && payments.hasOwnProperty('preSalePayment')) {
      const finishDatePreSale = new Date(payments.preSalePayment.finishDate);
      if (currentDate <= finishDatePreSale) {
        setIsPresale(true);
        dispatch(getPaymentMake(getPreSalePayment(payments, cart.length)));
      } else {
        setIsPresale(false);
        dispatch(getPaymentMake(getRegularPayment(payments, cart.length)));
      }
    } 
  }, [payments, cart.length, dispatch]);

  return (
    <div className={`${styles.accordion_item} ${styles.accordion_item_summary}`}>
      <div className={styles.item_summary}>
        <h3>Total Seleccionados</h3>
        <p className={styles.item_summary_selected}>{cart.length } {cart.length === 1 ? 'Reto': 'Retos'}</p>
      </div>
      <div className={`${styles.item_summary} ${ isPresale ? styles.item_summary_through : styles.item_summary_presale}`}>
        <h3>Total Pago Regular</h3>
        <p className={`${styles.item_summary} ${ isPresale ? styles.item_summary_through : styles.item_summary_presale}`}>S/ {formatPayment(getRegularPayment(payments, cart.length))}</p>
      </div>
      <div className={`${styles.item_summary} ${ !isPresale ? styles.item_summary_through : styles.item_summary_presale}`}>
        
        <div className={styles.summary_presale_title}><h3>Total Pago Preventa</h3><p>(01 - 23 Setiembre)</p></div>
        <p className={`${styles.item_summary} ${ !isPresale ? styles.item_summary_through : styles.item_summary_presale}`}>S/ {formatPayment(getPreSalePayment(payments, cart.length))}</p>
      </div>
    </div>
  )
}

export default AccordionSummary