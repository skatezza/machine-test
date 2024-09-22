
import FifthSection from './pages/FifthSection'
import FirstSection from './pages/FirstSection'
import FooterSection from './pages/FooterSection'
import ForthSection from './pages/ForthSection'
import NavBar from './pages/NavBar'
import SecondSection from './pages/SecondSection'
import SixthSection from './pages/SixthSection'
import ThirdSection from './pages/ThirdSection'

function App() {

  return (
    <>
        <div className='bg-black w-full h-screen'>
          <NavBar/>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <ForthSection/>
          <FifthSection/>
          <SixthSection/>
          <FooterSection/>
        </div>
    </>
  )
}

export default App
