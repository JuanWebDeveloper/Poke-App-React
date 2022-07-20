export const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='sign-in_content'>
        <h1 className='title'>Iniciar Sesión</h1>

        <form className='form'>
          <div className='form-group'>
            <input type='email' name='sign-in_email' placeholder='Correo electrónico' />
            <div className='messages-error'>Correo electrónico inválido</div>
          </div>
          <div className='form-group'>
            <input type='password' name='sign-in_password' placeholder='Contraseña' />
            <div className='messages-error'>Correo electrónico inválido</div>
          </div>
          <button className='btn-default'>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};
