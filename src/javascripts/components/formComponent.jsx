import React from 'react';
import MaskedInput from 'react-text-mask';

const FormComponent = props => (
  <>
    {props.type === 'textarea' ? (
      <textarea
        className={
          props.className ? `form__input ${props.className}` : `form__input`
        }
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.handleChange}
        onBlur={props.handleChange}
        value={props.value}
      />
    ) : props.mask ? (
      <MaskedInput
        mask={props.mask}
        className={
          props.className ? `form__input ${props.className}` : `form__input`
        }
        placeholder={props.placeholder}
        type={props.type}
        maxLength={props.maxlength}
        name={props.name}
        onChange={props.handleChange}
        onBlur={props.handleChange}
        value={props.value}
      />
    ) : (
          <input
            className={
              props.className ? `form__input ${props.className}` : `form__input`
            }
            placeholder={props.placeholder}
            type={props.type}
            maxLength={props.maxlength}
            name={props.name}
            onChange={props.handleChange}
            onBlur={props.handleChange}
            value={props.value}
          />
        )}
  </>
);

export default FormComponent;
