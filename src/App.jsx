import AboutPage from './page/about/AboutPage'
import Contack from './page/about/Contack'
import Faq from './page/about/Faq'
import Info from './page/about/Info'
import Rules from './page/about/Rules'
import TermCondition from './page/about/TermCondition'
import DetailPage from './page/detailPage/DetailPage'
import LogIn from './page/login/Login'
import Main from './page/main/Main'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/termcondition' element={<TermCondition/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/contack' element={<Contack/>}/>
      <Route path='/product-details/:id' element={<DetailPage/>}/>
      <Route path='/likedPage' element={<DetailPage/>}/>
      <Route path='/logIn' element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
