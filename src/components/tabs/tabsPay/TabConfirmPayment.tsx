import { useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import useForm from "../../../hooks/useForm";
import { FormFields, TabConfirmPaymentProps } from "../../../types";
import FormPayment from "../../form/FormPayment"
import { clearCart } from "../../../redux/actions";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import dbConnected from './../../../dataBase/firebase';
import styles from './../../../styles/Loader.module.css';
import stylesModal from './../../../styles/Modal.module.css';
import ButtonCall from "../../button/ButtonCall";
import { WhatsappIcon } from "../../icons";
import { getCurrentDate, getCurrentTime } from "../../../utils/formatDate";
import { config } from "../../../api/apiConfig";

const db = getFirestore(dbConnected)

const TabConfirmPayment = ({setTabsFinished, tabsFinished, onClose}: TabConfirmPaymentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch:any = useDispatch();
  const paymentMake = useSelector((state:any) => state.paymentMake);
  const validCoupon = useSelector((state:any) => state.validCoupon);

  const [nameForm, setNameForm] = useState('');
  const nameCareer = 'Psicología';
  const nameChallenge = 'Reto de Psicología';

  const { formValues, handleInputChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: '',
      email: '',
      country: 'peru',
      whatsapp: '',
    },
    onSubmit: async (data: FormFields) => {
      setIsLoading(true);
      setNameForm(data.name)
      const  dataRegistered = {
        date: getCurrentDate(),
        hour: getCurrentTime(),
        name: data.name,
        country: data.country,
        phone: data.whatsapp,
        email: data.email,
        career: nameCareer,
        challenge: nameChallenge,
        coupon: validCoupon,
        payment: `${paymentMake}.00`
      }
      try {
        await addDoc(collection(db, "User"), { 
          // ...data
          ...dataRegistered
        });
        dispatch(clearCart());
        setTabsFinished(true)
        console.log('dataRegistered:::', dataRegistered)
      } catch (error) {
        console.error("Error al enviar los datos a Firebase:", error);
      } finally {
        setIsLoading(false);
      }
    },
    validate: (values: FormFields) => {
      const errors: FormFields = {};
      if (!values.name) {
        errors.name = '* Nombre es requerido';
      }

      if(!values.email){
        errors.email = '* Email es requerido';
      } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = '* Email es inválido, ejm: prueba@gmail.com';
      };

      if(!values.whatsapp){
        errors.whatsapp = '* Whatsapp es requerido';
      }else if(!/^[0-9 ]+$/.test(values.whatsapp)){
        errors.whatsapp = '* Whatsapp es inválido, sólo ingrese números';
      }

      return errors;
    },
  });

  const messageWhatsapp = (name:string, challenge: string) => {
    let message = ''
    message += `Hola! Soy *${name}*, y me inscribi a ${challenge}. `;
    message += `Quiero confirmar mi participación. Gracias`;

    const encodeText = encodeURI(message);
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=+${config.NUMBER_WHATSHAPP_MESSAGE}&text=${encodeText}`;
    window.open(urlWhatsapp);
  }

  const confirmParticipation = () => {
    messageWhatsapp(nameForm, nameChallenge)
    onClose();
  };

  return (
    <div>
      {isLoading ? (
        <div className={styles.loader_content}>
          <span className={styles.loader}></span>
        </div>
      ) : tabsFinished ? (
        <div className={stylesModal.tab_confirm}>
          <p className={stylesModal.confirm_title}>Registro completo</p>
          <p>¡Gracias por confirmar tu registro para Reto de Profesionales! Estamos emocionados de tenerte con nosotros.</p>
          <p>Esperamos que esta experiencia sea enriquecedora y te ayude a avanzar en tu camino hacia tu éxito profesional.</p>
          <p className={stylesModal.confirm_footer}></p>
          <div className={stylesModal.centered}>
            <ButtonCall title="ENVIAR PAGO Y CONFIRMAR ASISTENCIA" onClick={confirmParticipation} icon={ <WhatsappIcon fill="var(--white-color)" translateY={4}/>}/>
          </div>
        </div>
      ): (
        <div>
          <FormPayment
            title={'Confirma tu participación llenando el formulario'}
            formValues={formValues}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </div>
      )}
    </div>
  )
}

export default TabConfirmPayment