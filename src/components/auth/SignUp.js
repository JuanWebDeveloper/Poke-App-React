export const SignUp = () => {
  return (
    <div className='sign-up'>
      <div className='sign-up_content'>
        <h1 className='title'>Registrarse</h1>

        <form className='form'>
          <div className='form-group'>
            <input type='text' name='sign-up_username' placeholder='Nombre de usuario' />
            <div className='messages-error'>Nombre de usuario inválido</div>
          </div>
          <div className='form-group'>
            <input type='email' name='sign-up_email' placeholder='Correo electrónico' />
            <div className='messages-error'>Correo electrónico inválido</div>
          </div>
          <div className='form-group'>
            <input type='password' name='sign-up_password' placeholder='Contraseña' />
            <div className='messages-error'>Contraseña inválida</div>
          </div>
          <div className='form-group'>
            <input type='password' name='sign-up_password-confirm' placeholder='Confirmar contraseña' />
            <div className='messages-error'>Las contraseñas no coinciden</div>
          </div>
          <button className='btn-default'>Registrarse</button>
        </form>
      </div>
    </div>
  );
};
