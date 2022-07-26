import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { validateSignUp } from '../../helpers/validator';
import { cleanUpErrors } from '../../actions/ui';
import { signUp } from '../../actions/auth';

export const SignUp = () => {
  const dispatch = useDispatch();
  const { errorMessage, withMistakes, validateField } = useSelector(({ ui }) => ui);

  useEffect(() => {
    return () => dispatch(cleanUpErrors());
  }, [dispatch]);

  const { formValues, handleInputChange } = useForm({
    su_username: '',
    su_email: '',
    su_password: '',
    su_password_confirmation: '',
  });

  const { su_username, su_email, su_password, su_password_confirmation } = formValues;

  const handleFocus = ({ target }) => {
    if (withMistakes && target.name === validateField) {
      const messageError = target.parentNode.childNodes[1];
      messageError.classList.add('hide');

      setTimeout(() => dispatch(cleanUpErrors()), 300);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateData = validateSignUp(formValues, dispatch);
    validateData && dispatch(signUp(su_username, su_email, su_password));
  };

  return (
    <div className='sign-up'>
      <div className='sign-up_content'>
        <h1 className='title'>Registrarse</h1>

        <form className='form' onSubmit={handleSubmit} autoComplete='off'>
          <div className='form-group'>
            <input
              type='text'
              name='su_username'
              placeholder='Nombre de usuario'
              className={`${validateField === 'su_username' && 'is-invalid'}`}
              value={su_username}
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            {withMistakes && validateField === 'su_username' && <div className='messages-error'>{errorMessage}</div>}
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='su_email'
              placeholder='Correo electrónico'
              className={`${validateField === 'su_email' && 'is-invalid'}`}
              value={su_email}
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            {withMistakes && validateField === 'su_email' && <div className='messages-error'>{errorMessage}</div>}
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='su_password'
              placeholder='Contraseña'
              className={`${validateField === 'su_password' && 'is-invalid'}`}
              value={su_password}
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            {withMistakes && validateField === 'su_password' && <div className='messages-error'>{errorMessage}</div>}
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='su_password_confirmation'
              placeholder='Confirmar contraseña'
              className={`${validateField === 'su_password_confirmation' && 'is-invalid'}`}
              value={su_password_confirmation}
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            {withMistakes && validateField === 'su_password_confirmation' && <div className='messages-error'>{errorMessage}</div>}
          </div>
          <button className='btn-default'>Registrarse</button>
        </form>
      </div>
    </div>
  );
};
