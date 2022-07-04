import Button, { BtnNaoLancado } from '../../Componentes/botoes';

// import './dashboard.css';

function Lancamentos() {
    //Usar Fetch e jogar em um array para mostrar as informações

    return (
        <div className='dashboard-container'>
            <h2>{'Nome'}, Veja seus Lançamentos</h2>
            <div className='card-box'>
                
                {
                    // itens.map(itens => (
                        <div className='card-dashboard'>
                            <img src='assets/image 1.png' alt="Imagem do foguete" />
                            <div className='card-body'>
                                <p>Nome do foguete: {}</p>
                                <p>Nome da Missão: {}</p>
                                <p>Ano de Lançamento: {}</p>
                            </div>
                            <div className='card-btn'>
                                <Button type='submit'>LANÇADO</Button>
                            </div>
                            {/* <div className='card-btn'>
                                <BtnNaoLancado type='submit'>NÃO LANÇADO</BtnNaoLancado>
                            </div> */}
                        </div>
                    // ))
                }
            </div>
        </div>
    );
}

export default Lancamentos;
