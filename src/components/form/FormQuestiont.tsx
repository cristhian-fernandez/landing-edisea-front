import { FormFields } from '../../types';
import useForm from '../../hooks/useForm';
import Form from './Form';

const FormQuestion = () => {

  const { formValues, handleInputChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: '',
      email: '',
      whatsapp: ''
    },
    onSubmit: async (data: FormFields) => {
      console.log('Form data:', data);
    },
    validate: (values: FormFields) => {
      const errors: FormFields = {};
      if (!values.name) {
        errors.name = 'Nombre es requerido';
      }
      if (!values.email) {
        errors.email = 'Email es requerido';
      }
      return errors;
    },
  });

  return (
    <div>
      <h1>My Component</h1>
      <Form
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  )
}

export default FormQuestion