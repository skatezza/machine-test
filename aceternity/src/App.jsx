import FifthSection from './pages/FifthSection'
import FirstSection from './pages/FirstSection'
import FooterSection from './pages/FooterSection'
import FourthSection from './pages/FourthSection'
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
          <FourthSection/>
          <FifthSection/>
          <SixthSection/>
          <FooterSection/>
        </div>
    </>
  )
}

export default App
