import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Blog from './pages/blog'
import Test from './pages/test'

function App() {
  return(
    <>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/blog' element= {<Blog/>}/>
        <Route path = '/test'element={<Test/>}/>
      </Routes>
      </HashRouter>
    </>
  )

}


export default App
