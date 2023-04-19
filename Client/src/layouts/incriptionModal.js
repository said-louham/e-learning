import { useModal } from 'react-modal-hook';
import Login from '../components/login/Login';
import PageRegister from '../test/Components/PageRegister';
import LoginForm from './loginForm';

function InscriptionModal() {
  const [showModal, hideModal] = useModal(() => (
    
    //   <Login hidden={hideModal}/>
        <PageRegister hidden={hideModal}/>
    
  ));

  return (
    <div>
      <button onClick={showModal}>Log In</button>
     
    </div>
  );
}
export default  InscriptionModal