import './Formulario.css';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao/Index';

const Formulario = () => {

    const times = [
        'Design',
        'Front-End',
        'Backend'
    ]

    const aoSavar = (evento) => {
        evento.preventDefault()
        console.log('Foi Submetido')
    }

    return (
        <div className="formulario">
            <form onSubmit={aoSavar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Coloque sua Imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>Criar card</Botao>
            </form>
        </div>
    )
}

export default Formulario;