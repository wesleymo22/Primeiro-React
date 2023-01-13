import './Formulario.css';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao/Index';
import { useState } from 'react';

const Formulario = (props) => {



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSavar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
    }

    return (
        <div className="formulario">
            <form onSubmit={aoSavar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Coloque sua Imagem"
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </div>
    )
}

export default Formulario;