import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/Home'
import EditData from './pages/dit'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit' element={<EditData/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
