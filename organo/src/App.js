import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Wesley Moraes',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/wesleymo22.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rodrigo Araujo',
      cargo: 'Desenvolvedor Back-End C#',
      imagem: 'https://github.com/rodrigoaraujo1709.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Wesley Moraes',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/wesleymo22.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Rodrigo Araujo',
      cargo: 'Desenvolvedor Back-End C#',
      imagem: 'https://github.com/rodrigoaraujo1709.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Wesley Moraes',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/wesleymo22.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rodrigo Araujo',
      cargo: 'Desenvolvedor Back-End C#',
      imagem: 'https://github.com/rodrigoaraujo1709.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Wesley Moraes',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/wesleymo22.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rodrigo Araujo',
      cargo: 'Desenvolvedor Back-End C#',
      imagem: 'https://github.com/rodrigoaraujo1709.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Wesley Moraes',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/wesleymo22.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Rodrigo Araujo',
      cargo: 'Desenvolvedor Back-End C#',
      imagem: 'https://github.com/rodrigoaraujo1709.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Wesley Moraes',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/wesleymo22.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rodrigo Araujo',
      cargo: 'Desenvolvedor Back-End C#',
      imagem: 'https://github.com/rodrigoaraujo1709.png',
      time: times[5].nome
    },

  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
