
import { Nav } from './navbar/nav'
import './App.css'
import { Home } from './navbar/home'
import { Footer } from './navbar/footer'
import {Contact} from './navbar/Contact'

function App() {

  return (
    <>
      <Nav/>
      <Home title="HEIGHLANDER" p="oversized shirt"/>
<Contact/>
      <Footer/>     
    </>
  )
}

export default App
