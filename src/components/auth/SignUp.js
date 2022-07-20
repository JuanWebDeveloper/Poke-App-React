import { useForm } from '../../hooks/useForm';

export const SignUp = () => {
  const { formValues, handleInputChange } = useForm({
    su_username: '',
    su_email: '',
    su_password: '',
    su_password_confirmation: '',
  });

  const { su_username, su_email, su_password, su_password_confirmation } = formValues;

  return (
    <div className='sign-up'>
      <div className='sign-up_content'>
        <h1 className='title'>Registrarse</h1>

        <form className='form'>
          <div className='form-group'>
            <input type='text' name='su_username' placeholder='Nombre de usuario' value={su_username} onChange={handleInputChange} />
            {/* <div className='messages-error'>Nombre de usuario inválido</div> */}
          </div>
          <div className='form-group'>
            <input type='email' name='su_email' placeholder='Correo electrónico' value={su_email} onChange={handleInputChange} />
            {/* <div className='messages-error'>Correo electrónico inválido</div> */}
          </div>
          <div className='form-group'>
            <input type='password' name='su_password' placeholder='Contraseña' value={su_password} onChange={handleInputChange} />
            {/* <div className='messages-error'>Contraseña inválida</div> */}
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='su_password_confirmation'
              placeholder='Confirmar contraseña'
              value={su_password_confirmation}
              onChange={handleInputChange}
            />
            {/* <div className='messages-error'>Las contraseñas no coinciden</div> */}
          </div>
          <button className='btn-default'>Registrarse</button>
        </form>
      </div>
    </div>
  );
};
