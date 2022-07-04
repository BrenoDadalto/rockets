import RealizarLancamento from '../../Componentes/lancamento';
import './lancar.css';

function Lancar() {
    return (
        <div className='lancamento-container'>
            <h2>{'Nome'}, Selecione o Lucro e Data de Lançamento</h2>
            <div className='lancamento-box'>
                <div className='foguete-box'>
                    <h3>Foguete Selecionado</h3>
                    {
                        // itens.map(itens => (
                        <div className='card-lancamento'>
                            <img src='assets/image 1.png' alt="Imagem do foguete" />
                            <div className='card-body'>
                                <p>Nome do foguete: { }</p>
                                <p>Tipo de Motor: { }</p>
                                <p>Custo de Lançamento: { }</p>
                                <p>Ativo: { }</p>
                            </div>
                        </div>
                        // ))
                    }
                </div>
                <div>
                    <h3>Data e Lucro</h3>
                    <RealizarLancamento />
                </div>
            </div>
        </div>
    );
}

export default Lancar;
