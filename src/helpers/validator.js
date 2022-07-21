import validator from 'validator';

import { formsError, cleanUpErrors } from '../actions/ui';

// Validate The Fields Of The Sign In Form.
export const validateSignIn = (values = {}, dispatch, errorFirebase = false, errorFirebaseMessage) => {
  let validateData = false;

  if (errorFirebase) {
    if (errorFirebaseMessage === 'Firebase: Error (auth/wrong-password).') {
      dispatch(formsError('La contraseña es incorrecta.', 'si_password'));
    } else if (errorFirebaseMessage === 'Firebase: Error (auth/user-not-found).') {
      dispatch(formsError('El correo electrónico no se encuentra registrado.', 'si_email'));
    } else if (errorFirebaseMessage === 'Firebase: Error (auth/too-many-requests).') {
      dispatch(formsError('Acceso denegado. Superaste la cantidad máxima de intentos al ingresar.', ''));
    } else {
      dispatch(formsError('Error desconocido.', ''));
    }

    return validationData;
  } else {
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
  }

  dispatch(cleanUpErrors());
  validateData = true;
  return validateData;
};

// Validate The Fields Of The Sign Up Form.
export const validateSignUp = (values = {}, dispatch, errorFirebase = false, errorFirebaseMessage) => {
  let validateData = false;

  if (errorFirebase) {
    if (errorFirebaseMessage === 'Firebase: Error (auth/email-already-in-use).') {
      dispatch(formsError('El correo electrónico ya se encuentra registrado.', 'su_email'));
    } else {
      dispatch(formsError('Error desconocido.', ''));
    }

    return validateData;
  } else {
    const { su_username, su_email, su_password, su_password_confirmation } = values;

    if (validator.isEmpty(su_username)) {
      dispatch(formsError('El nombre de usuario es requerido.', 'su_username'));
      return validateData;
    } else if (su_username.trim().length < 5) {
      dispatch(formsError('El nombre de usuario debe tener al menos 5 caracteres.', 'su_username'));
      return validateData;
    } else if (validator.isEmpty(su_email)) {
      dispatch(formsError('El correo es requerido.', 'su_email'));
      return validateData;
    } else if (!validator.isEmail(su_email)) {
      dispatch(formsError('El correo no es válido.', 'su_email'));
      return validateData;
    } else if (validator.isEmpty(su_password)) {
      dispatch(formsError('La contraseña es requerida.', 'su_password'));
      return validateData;
    } else if (su_password.trim().length < 6) {
      dispatch(formsError('La contraseña debe tener al menos 6 caracteres.', 'su_password'));
      return validateData;
    } else if (validator.isEmpty(su_password_confirmation)) {
      dispatch(formsError('La confirmación de la contraseña es requerida.', 'su_password_confirmation'));
      return validateData;
    } else if (!validator.equals(su_password, su_password_confirmation)) {
      dispatch(formsError('Las contraseñas no coinciden.', 'su_password_confirmation'));
      return validateData;
    }
  }

  dispatch(cleanUpErrors());
  validateData = true;
  return validateData;
};
