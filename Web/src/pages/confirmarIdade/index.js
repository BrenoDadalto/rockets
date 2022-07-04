import Button from '../../Componentes/botoes';
import Cadastro from '../../Componentes/cadastro';

import './idade.css';

function ConfirmarIdade() {
  //fetch pegando a idade do usuario

  return (
    <div className='formulario-container'>
      <div className='formulario-login'>
        <p>Sua idade é:</p>
        <h1>{}</h1>
        <Button type='submit'>CONFIRMAR</Button>
        <Cadastro link='/login'>Cancelar</Cadastro>
      </div>
    </div>
  );
}

export default ConfirmarIdade;
