import React from 'react';
import { FormProps } from '../../types';

const Form: React.FC<FormProps> = ({
  formValues,
  handleInputChange,
  handleSubmit,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formValues).map((fieldName) => (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{fieldName}</label>
          <input
            type="text"
            name={fieldName}
            value={formValues[fieldName]}
            onChange={handleInputChange}
          />
          {errors[fieldName] && (
            <div className="error">{errors[fieldName]}</div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
