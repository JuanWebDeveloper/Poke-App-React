import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { validateSignIn } from '../../helpers/validator';
import { cleanUpErrors } from '../../actions/ui';
import { signIn } from '../../actions/auth';
import { Loading } from '../loading/Loading';

export const SignIn = () => {
  const dispatch = useDispatch();
  const { errorMessage, withMistakes, validateField, loading } = useSelector(({ ui }) => ui);

  useEffect(() => {
    return () => dispatch(cleanUpErrors());
  }, [dispatch]);

  const { formValues, handleInputChange } = useForm({
    si_email: '',
    si_password: '',
  });

  const { si_email, si_password } = formValues;

  const handleFocus = ({ target }) => {
    if (withMistakes && target.name === validateField) {
      const messageError = target.parentNode.childNodes[1];
      messageError.classList.add('hide');

      setTimeout(() => dispatch(cleanUpErrors()), 300);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateData = validateSignIn(formValues, dispatch);
    validateData && dispatch(signIn(si_email, si_password));
  };

  return (
    <Fragment>
      {loading ? (
        <div className='main-loading'>
          <Loading />
        </div>
      ) : (
        <div className='sign-in'>
          <div className='sign-in_content'>
            <h1 className='title'>Iniciar Sesión</h1>

            <form className='form' onSubmit={handleSubmit} autoComplete='off'>
              <div className='form-group'>
                <input
                  type='text'
                  name='si_email'
                  placeholder='Correo electrónico'
                  className={`${validateField === 'si_email' && 'is-invalid'}`}
                  value={si_email}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                />
                {withMistakes && validateField === 'si_email' && <div className='messages-error'>{errorMessage}</div>}
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='si_password'
                  placeholder='Contraseña'
                  className={`${validateField === 'si_password' && 'is-invalid'}`}
                  value={si_password}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                />
                {withMistakes && validateField === 'si_password' && <div className='messages-error'>{errorMessage}</div>}
              </div>
              <button className='btn-default'>Iniciar Sesión</button>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};
