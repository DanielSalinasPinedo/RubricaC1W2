import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Overview from './pages/Overview'
import Content from './pages/Content'
import { Datos } from './contexto/Contexto'

import Create from './pages/Create'

function App() {
  const [overview, setOverview] = useState(true)
  const [content, setContent] = useState(false)
  const [create, setCreate] = useState(false)

  const [categoriaSeleccionada] = useState('');

  return (
    <Datos>
      <div>
        <Navbar setOverview={setOverview} setContent={setContent} setCreate={setCreate}/>
        {
          content ? (
            <Content/>
          ) : (
            create ? (
              <Create categoriaSeleccionada={categoriaSeleccionada} setContent={setContent}
                        setCreate={setCreate}/>
            ) : (
              <Overview/>
            )
          )
        }
        <Footer/>
      </div>
    </Datos>
  )
}

export default App
