import { useState } from 'react';
import Banner from './components/Banner/Index';
import Formulario from './components/Formulario/Index';
import Time from './components/Time';


function App() {

  const times = [
    {
      nome: 'Design',
      corPrimaria: '#DB6EBF',
      corSecondaria: '#FAE9F5'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecondaria: '#E8F8FF'
    },
    {
      nome: 'Back-end',
      corPrimaria: '#57C278',
      corSecondaria: '#D9F7E9'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecondaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
    </div>
  );
}

export default App;
