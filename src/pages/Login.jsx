import { useDispatch } from 'react-redux'
import '../styles/Login.css'
import { get_cliente } from '../store/actions/ClienteActions'
import { Link } from 'react-router-dom';



const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
      dispatch(get_cliente());
  };

  return (
      <div className='login-container'>
          <Link to='/' onClick={handleLogin}>
              Logearse
          </Link>
      </div>
  );
};

export default Login