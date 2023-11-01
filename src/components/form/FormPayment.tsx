import React from 'react';
import { FormProps } from '../../types';
import styles from './../../styles/Form.module.css';

const FormPayment: React.FC<FormProps> = ({
  formValues,
  handleInputChange,
  handleSubmit,
  errors,
  title
}) => {

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.form_title}>{title}</p>
      <div className={styles.form_field}>
        <input
          type="text"
          name="name"
          placeholder='Nombres'
          value={formValues.name}
          onChange={handleInputChange}
        />
        {errors.name && <div className={styles.error}>{errors.name}</div>}
      </div>
      <div className={styles.form_field}>
        <input
          type="text"
          name="email"
          placeholder='Email'
          value={formValues.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
      </div>
      <div className={styles.form_field}>
        <select
          name="country"
          value={formValues.country}
          onChange={handleInputChange}
        >
          <option value="peru">Perú</option>
          <option value="otro_pais">Otro País</option>
        </select>
        {errors.country && <div className={styles.error}>{errors.country}</div>}
      </div>
      <div className={styles.form_field}>
        <div className={styles.form_field_whatsapp}>
          
          {formValues.country==='peru' && <span>+51</span>}
          <input
            type="text"
            name="whatsapp"
            placeholder="whatsapp"
            value={formValues.whatsapp}
            onChange={handleInputChange}
          />
        </div>
        {errors.whatsapp && <div className={styles.error}>{errors.whatsapp}</div>}
      </div>
      <button type="submit" className={styles.form_button}>Reservar Asistencia</button>
    </form>
  );
};

export default FormPayment;

