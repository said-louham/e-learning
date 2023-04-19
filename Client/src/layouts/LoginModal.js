import { useModal } from 'react-modal-hook';
import Login from '../components/login/Login';
import LoginForm from './loginForm';

function LoginModal() {
  const [showModal, hideModal] = useModal(() => (
    
      <Login hidden={hideModal}/>
    
  ));

  return (
    <div>
      <button onClick={showModal}>Log In</button>
     
    </div>
  );
}
export default LoginModal