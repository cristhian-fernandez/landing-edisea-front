import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import { FormFields, TabPaymentProps } from "../../../types";
import FormPayment from "../../form/FormPayment"
import { clearCart } from "../../../redux/actions";

const TabConfirmPayment = ({handleNext}: TabPaymentProps) => {
  const cart = useSelector((state:any) => state.cart);
  const dispatch:any = useDispatch();
  const { formValues, handleInputChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: '',
      email: '',
      country: 'peru',
      whatsapp: '',
    },
    onSubmit: async (data: FormFields) => {
      console.log('Form data::::', data);
      console.log('CART::', cart)

      dispatch(clearCart());
      handleNext();
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
      <FormPayment
        title={'Confirma tu participación llenando el formulario'}
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  )
}

export default TabConfirmPayment