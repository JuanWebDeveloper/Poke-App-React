import { useSelector } from 'react-redux';

export const HomePage = () => {
  const { username } = useSelector(({ auth }) => auth);

  return (
    <div className='home-page'>
      <div className='home-page_content'>
        <h1 className='title'>
          Bienvenido a ATCP <span>{username}</span>
        </h1>
      </div>
    </div>
  );
};
