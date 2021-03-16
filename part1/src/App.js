
import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

function App() {
  const a = 2
  const b = 3

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='en un curso'/>
      <Mensaje color='yellow' message='de REACT'/>
      <h1>Título de la App</h1>
      <div>
        <p>El resultado es: </p>
        {a + b}
      </div>
      <Description />
    </div>
  );
}

export default App;
