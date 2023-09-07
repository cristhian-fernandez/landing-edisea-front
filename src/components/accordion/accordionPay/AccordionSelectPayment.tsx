import { useState } from "react";
import AccordionSummary from "./AccordionSummary"
import styles from './../../../styles/Accordion.module.css';
import {BcpIcon, InterbankIcon, WhatsappIcon} from './../../icons'
import yapePath from './../../../assets/yape_plin_icon.png'
import { useSelector } from "react-redux";
import { formatPayment } from "../../../utils/formatData";

const AccordionSelectPayment = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);
  const [selectedOption, setSelectedOption] = useState<number | null>(2);
  const paymentMake = useSelector((state:any) => state.paymentMake);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleOptionChange = (option: number) => {
    setSelectedOption(option);
  };

  const handleWhatsappClick = () => {
    const whatsappURL = 'https://api.whatsapp.com/send?phone=+51942753436&text=Hola,%20quiero%20participar%20en%20el%20Reto%20y%20quisiera%20ver%20otra%20opci%C3%B3n%20de%20pago.';
    window.open(whatsappURL, '_blank');
  };

  return (
    
    <div className={styles.accordion}>
      <AccordionSummary />
      <p className={styles.select_pay_title}>Selecciona una opción para realizar el pago <span>(Recuerda tomar foto a tu transferencia)</span></p>

      <div className={`${styles.accordion_item_pay} ${activeIndex === 2 ? styles.active : ''}`}>
        <div className={`${styles.accordion_title} ${selectedOption === 2 ? styles.active : ''}`}
          onClick={() => {
            toggleAccordion(2)
            handleOptionChange(2)
          }}
        >
          <div className={`${styles.accordion_title_option} ${activeIndex === 2 ? styles.active : ''}`}>
            <input
              type="radio"
              checked={selectedOption === 2}
              onChange={() => handleOptionChange(2)}
              className={styles.checkbox}
            />
            <p>Vía transferencia YAPE - PLIN</p>
          </div>
          <div className={styles.content_bank_icon}>
            <img src={yapePath} alt="" />
          </div>
        </div>
        <div className={styles.accordion_content}>
          <div className={`${styles.tab_content} ${styles.tab_content_pay}`}>
            <div className={styles.content_transfer}>
              <p>Ahora debes transferir</p>
              <span className={styles.content_transfer_price}>S/ {formatPayment(paymentMake)} Soles</span>
            </div>
            <div className={styles.content_account}>
              <p>Propietario</p>
              <span>Anthony de la Cruz<span className={styles.content_position}>(Cofundador Edisea)</span></span>
            </div>
            <div className={styles.content_account}>
              <p>Número Celular Yape</p>
              <span>942 753 436</span>
            </div>
            <div className={styles.content_account}>
              <p>Número Celular Plin</p>
              <span>942 753 436</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.accordion_item_pay} ${activeIndex === 0 ? styles.active : ''}`}>
        <div className={`${styles.accordion_title} ${selectedOption === 0 ? styles.active : ''}`}
          onClick={() => {
            toggleAccordion(0)
            handleOptionChange(0)
          }}
        >
          <div className={`${styles.accordion_title_option} ${activeIndex === 0 ? styles.active : ''}`}>
            <input
              type="radio"
              checked={selectedOption === 0}
              onChange={() => handleOptionChange(0)}
              className={styles.checkbox}
            />
            <p>Vía transferencia</p>
            <p className={styles.content_bank_abrev}>BCP</p>
            <p className={styles.content_bank}>bancaria Banco Credito del Perú</p>
          </div>
          <div className={styles.content_bank_icon}><BcpIcon/></div>
        </div>
        <div className={styles.accordion_content}>
          <div className={`${styles.tab_content} ${styles.tab_content_pay}`}>
            <div className={styles.content_transfer}>
              <p>Ahora debes transferir</p>
              <span className={styles.content_transfer_price}>S/ {formatPayment(paymentMake)} Soles</span>
            </div>
            {/* <h4>BANCO CREDITO DEL PERÚ</h4> */}
            <div className={styles.content_account}>
              <p>Propietario</p>
              <span>Anthony de la Cruz<span className={styles.content_position}>(Cofundador Edisea)</span></span>
            </div>
            <div className={styles.content_account}>
              <p>Cuenta Bancaria BCP Soles</p>
              <span>2550 4288 213064</span>
            </div>
            <div className={styles.content_account}>
              <p>Cuenta Interbancaria BCP Soles</p>
              <span>002255 1042 8821 306485</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.accordion_item_pay} ${activeIndex === 1 ? styles.active : ''}`}>
        <div className={`${styles.accordion_title} ${selectedOption === 1 ? styles.active : ''}`}
          onClick={() => {
            toggleAccordion(1)
            handleOptionChange(1)
          }}
        >
          <div className={`${styles.accordion_title_option} ${activeIndex === 1 ? styles.active : ''}`}>
            <input
              type="radio"
              checked={selectedOption === 1}
              onChange={() => handleOptionChange(1)}
              className={styles.checkbox}
            />
            <p>Vía</p>
            <p className={styles.content_bank_abrev}>transfer INTERBANK</p>
            <p className={styles.content_bank}>transferencia bancaria INTERBANK</p>
          </div>
          <div className={styles.content_bank_icon}><InterbankIcon/></div>
        </div>

        <div className={styles.accordion_content}>
          <div className={`${styles.tab_content} ${styles.tab_content_pay}`}>
            <div className={styles.content_transfer}>
              <p>Ahora debes transferir</p>
              <span className={styles.content_transfer_price}>S/ {formatPayment(paymentMake)} Soles</span>
            </div>
            <div className={styles.content_account}>
              <p>Propietario</p>
              <span>Edisea Sac<span className={styles.content_position}></span></span>
            </div>
            <div className={styles.content_account}>
              <p>Cuenta Bancaria INTERBANK Soles</p>
              <span>xxxx-xxxx-xxxx-xxx</span>
            </div>
            <div className={styles.content_account}>
              <p>Cuenta Interbancaria INTERBANK Soles</p>
              <span>xxxx-xxxx-xxxx-xxx</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.accordion_item_pay} ${activeIndex === 3 ? styles.active : ''}`}>
        <div className={`${styles.accordion_title} ${selectedOption === 3 ? styles.active : ''}`}
          onClick={() => {
            toggleAccordion(3)
            handleOptionChange(3)
          }}
        >
          <div className={`${styles.accordion_title_option} ${activeIndex === 3 ? styles.active : ''}`}>
            <input
              type="radio"
              checked={selectedOption === 3}
              onChange={() => handleOptionChange(3)}
              className={styles.checkbox}
            />
            <p>Otra forma de pago</p>
          </div>
          <div className={styles.content_bank_icon}>
            <img src={yapePath} alt="" />
          </div>
        </div>
        <div className={styles.accordion_content}>
          <div className={`${styles.tab_content} ${styles.tab_content_pay}`}>
            <div className={`${styles.content_transfer} ${styles.content_transfer_other}`}>
              <p>Escríbenos al whatsapp para ver otra opción de pago</p>
              <div className={styles.content_transfer_phone}>
                <p>Click aquí</p>
                <span onClick={handleWhatsappClick}><WhatsappIcon fill="#FFF"/><p>+51 951420376</p></span>
              </div>  
            </div>
          </div>
        </div>
      </div>     

      <div>
        <span className={styles.note}>* Nota: Recuerda tomar foto a tu transferencia</span>
      </div>
    </div>
  )
}

export default AccordionSelectPayment