import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../App/App.css'
import Contacto from '../../Pages/Contacto/index.jsx'
import Navbar from '../../Componentes/Navbar'
import Rick from '../../Pages/Rick/index.jsx'


const AppRoutes =()=>{
  let routes = useRoutes([
    
    {path:'/Rick', element:<Rick/>},
    {path:'/Contacto', element:<Contacto/>}
  ])
  return routes
}



function App() {

  return (
    <>
    <BrowserRouter>
    <AppRoutes/>
    <Navbar/>
    </BrowserRouter>
    </>
  )
}

export default App
