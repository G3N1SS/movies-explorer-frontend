import Intro from './Intro'
import About from './About'
import Technology from './Technology'
import Student from './Student'
import Footer from './Footer'
import Header from './Header'

function IntroPage(){
  return(
    <>
      <Header/>
      <main>
        <Intro/>
        <About/>
        <Technology/>
        <Student/>
      </main>
      <Footer/>
    </>
  )
}

export default IntroPage