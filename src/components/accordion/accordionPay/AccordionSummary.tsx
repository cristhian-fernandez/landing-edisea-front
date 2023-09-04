import { useSelector } from 'react-redux';
import { formatPayment } from '../../../utils/formatData';
import styles from './../../../styles/Accordion.module.css';


const AccordionSummary = () => {
  const cart = useSelector((state:any) => state.cart);
  return (
    <div className={`${styles.accordion_item} ${styles.accordion_item_summary}`}>
      <div className={styles.item_summary}>
        <h3>Total Seleccionados</h3>
        <p className={styles.item_summary_selected}>{cart.length} Retos</p>
      </div>
      <div className={`${styles.item_summary} ${styles.item_summary_through}`}>
        <h3>Total Pago Regular</h3>
        <p className={styles.item_summary_payment}>S/ {formatPayment(cart.length*19.90)}</p>
      </div>
      <div className={styles.item_summary}>
        
        <div className={styles.summary_presale_title}><h3>Total Pago Preventa</h3><p>(20 - 25 Setiembre)</p></div>
        <p className={styles.item_summary_presale}>S/ 29.90</p>
      </div>
    </div>
  )
}

export default AccordionSummary