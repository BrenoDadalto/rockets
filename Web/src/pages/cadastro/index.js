import React from 'react';
import axios from 'axios';
import Input from '../../Componentes/inputs';
import Button from '../../Componentes/botoes';

import './cadastro.css';

export default class CadastroUsuario extends React.Component {

  state = {
    nome: '',
    idade: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      nome: this.state.nome,
      idade: this.state.idade
    };

    axios({
      url: 'http://127.0.0.1:5000/usuario',
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-Type': 'Application/json;charset=UTF-8'
      },
      data: user
    })
      .then(() => {
        console.log('Data has been sent to the server');
      })
      .catch(() => {
        console.log('Internal server error');
      });

  }
  render() {
    console.log('State: ', this.state);
    return (
      <div className='formulario-container'>
        <form onSubmit={this.handleSubmit} className='formulario-login'>
          <Input name='nome' id='nome' type='text' placeholder='Seu Nome' value={this.state.nome} onChange={this.handleChange} />
          <Input name='Idade' type='number' placeholder='Sua Idade' value={this.state.idade} onChange={this.handleChange} />
          <Button type='submit'>CADASTRAR</Button>
        </form>
      </div>
    );
  }
}
