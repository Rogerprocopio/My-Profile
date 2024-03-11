import { useState } from "react"
import Perfil from "./components/perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/reposList";


function App() {
  const[formularioVisivel,setFormularioVisivel] = useState(true);
  const[nomeUsuario, setNomeUsuario] = useState('');

  return (
  <>
  <input type="text"  onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Nome de Usuario"/> 
  

  {nomeUsuario.length > 4 && (
    <>
    <Perfil nomeUsuario={nomeUsuario}/>
    <ReposList nomeUsuario={nomeUsuario}/>
    </>
  )}

  
  {/* {formularioVisivel && (
    <Formulario/>
  )}

  <button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}> 
    Toggle form
  </button> */}
  </>
  )
}

export default App
