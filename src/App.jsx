import { BrowserRouter, Route, Link, Routes  } from 'react-router-dom'
import Navbar from './components/UI/Navbar'
import {routes} from './router'
import './css/App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='app'>
      <Routes>
        {routes.map((route, index) => 
          <Route key={index} path={route.path} Component={route.element}/>
        )}
        {/* <Redirect to="/about" /> */}
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
