import './App.css'
import Billboard from './components/Billboard'
import Carousel from './components/Carousel'
import NavbarComponent from "./components/Navbar"
import TitleBox from './components/TitleBox'

function App() {

  return (
    <div className='p-0 m-0 w-full'>
      <div className=' overflow-hidden'>
        <Billboard className="items-center"/>
      </div>
      <NavbarComponent />
      <TitleBox />
      <Carousel genre='Comedy'/>
      <Carousel genre='Romance'/>
      <Carousel genre='Mystery'/>
      <Carousel genre='Horror'/>
      <Carousel genre='Fantasy'/>
      <Carousel genre='Science Fiction'/>
    </div>
  )
}

export default App
