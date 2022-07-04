import Input from '../../Componentes/inputs';
import Button from '../../Componentes/botoes';
import Cadastro from '../../Componentes/cadastro';

import './login.css';

function Login() {
  return (
    <div className='formulario-container'>
      <div className='formulario-login'>
        <Input name='Nome' type='text' placeholder='Digite o nome' />
        <Button type='submit'>ENTRAR</Button>
        <Cadastro link='/cadastro'>Cadastre-se Aqui</Cadastro>
      </div>
    </div>
  );
}

export default Login;
