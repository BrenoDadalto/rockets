import React from 'react';

import './lancamento.css';

function RealizarLancamento() {
  return (
    <div className='realiza-lan-container'>
      <div className='lancamento-card'>
        <input name='Lucro' type='text' placeholder='Informe o % de Lucro desejado' />
        <input name='DataLancamento' type='date' placeholder='Selecione a Data de Lançamento' />
        <button type='submit'>REALIZAR LANÇAMENTO</button>
      </div>
    </div>
  );
}

export default RealizarLancamento;
