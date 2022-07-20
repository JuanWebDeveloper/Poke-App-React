import validator from 'validator';

import { formsError, cleanUpErrors } from '../actions/ui';

// Validate Form Sign In Fields.
export const validateSignIn = (values = {}, dispatch) => {
  let validateData = false;

  const { si_email, si_password } = values;

  if (validator.isEmpty(si_email)) {
    dispatch(formsError('El correo es requerido.', 'si_email'));
    return validateData;
  } else if (!validator.isEmail(si_email)) {
    dispatch(formsError('El correo no es válido.', 'si_email'));
    return validateData;
  } else if (validator.isEmpty(si_password)) {
    dispatch(formsError('La contraseña es requerida.', 'si_password'));
    return validateData;
  } else if (si_password.trim().length < 6) {
    dispatch(formsError('La contraseña debe tener al menos 6 caracteres.', 'si_password'));
    return validateData;
  }

  dispatch(cleanUpErrors());
  validateData = true;
  return validateData;
};
