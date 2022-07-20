import { useForm } from '../../hooks/useForm';

export const SignIn = () => {
  const { formValues, handleInputChange } = useForm({
    si_email: '',
    si_password: '',
  });

  const { si_email, si_password } = formValues;

  return (
    <div className='sign-in'>
      <div className='sign-in_content'>
        <h1 className='title'>Iniciar Sesión</h1>

        <form className='form'>
          <div className='form-group'>
            <input type='email' name='si_email' placeholder='Correo electrónico' value={si_email} onChange={handleInputChange} />
            {/* <div className='messages-error'>Correo electrónico inválido</div> */}
          </div>
          <div className='form-group'>
            <input type='password' name='si_password' placeholder='Contraseña' value={si_password} onChange={handleInputChange} />
            {/* <div className='messages-error'>Contraseña inválida</div> */}
          </div>
          <button className='btn-default'>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};
