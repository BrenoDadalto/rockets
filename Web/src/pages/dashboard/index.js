import Button from '../../Componentes/botoes';

import './dashboard.css';

function Dashboard() {
    //Usar Fetch e jogar em um array para mostrar as informações

    //Exemplo
    // var itens = [{
    //     nome: 'nome',
    //     missao: 'missao',
    //     ano: 2022,
    //     imagem: 'assets/image 1.png'
    // },
    // {
    //     nome: 'nome',
    //     missao: 'missao',
    //     ano: 2022,
    //     imagem: 'assets/image 1.png'
    // },
    // {
    //     nome: 'nome',
    //     missao: 'missao',
    //     ano: 2022,
    //     imagem: 'assets/image 1.png'
    // },
    // {
    //     nome: 'nome',
    //     missao: 'missao',
    //     ano: 2022,
    //     imagem: 'assets/image 1.png'
    // },
    // {
    //     nome: 'nome',
    //     missao: 'missao',
    //     ano: 2022,
    //     imagem: 'assets/image 1.png'
    // }];
    return (
        <div className='dashboard-container'>
            <h2>Olá {'Nome'}, Selecione o Lançamento</h2>
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
                                <Button type='submit'>LANÇAR FOGUETE</Button>
                            </div>
                        </div>
                    // ))
                }
            </div>
        </div>
    );
}

export default Dashboard;
