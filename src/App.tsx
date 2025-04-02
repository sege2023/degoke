import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Blog from './pages/blog'

function App() {
  return(
    <>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/blog' element= {<Blog/>}/>
      </Routes>
      </HashRouter>
    </>
  )

}


export default App
