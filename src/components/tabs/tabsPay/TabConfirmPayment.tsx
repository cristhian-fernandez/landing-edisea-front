import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import { FormFields, TabPaymentProps } from "../../../types";
import FormPayment from "../../form/FormPayment"
import { clearCart } from "../../../redux/actions";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import dbConnected from './../../../dataBase/firebase';
import styles from './../../../styles/Loader.module.css'

const db = getFirestore(dbConnected)

const TabConfirmPayment = ({handleNext}: TabPaymentProps) => {
  // const cart = useSelector((state:any) => state.cart);
  const [isLoading, setIsLoading] = useState(false);
  // const [showNoChallengeError, setShowNoChallengeError] = useState(false);
  const dispatch:any = useDispatch();

  // useEffect(() => {
  //   if (cart.length === 0) setShowNoChallengeError(true);
  //   else setShowNoChallengeError(false);
  // }, [cart]);

  const { formValues, handleInputChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: '',
      email: '',
      country: 'peru',
      whatsapp: '',
    },
    onSubmit: async (data: FormFields) => {
      setIsLoading(true);
      try {
        await addDoc(collection(db, "User"), { 
          ...data
        });
        dispatch(clearCart());
        handleNext();
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
  return (
    <div>
      {isLoading ? (
        <div className={styles.loader_content}>
          <span className={styles.loader}></span>
        </div>

      ) : (
        <div>
          <FormPayment
            title={'Confirma tu participación llenando el formulario'}
            formValues={formValues}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
          {/* {showNoChallengeError && (
            <div className={styles.error_message}>
              No tienes ningún reto seleccionado
            </div>
          )} */}
        </div>
      )}
    </div>
  )
}

export default TabConfirmPayment