
import styles from './App.module.css'
import {Navbar} from "./component/Navbar/Navbar.jsx";
import {Hero} from "./component/Hero/Hero.jsx";
import {About} from "./component/About/About.jsx";
import {Experience} from "./component/Experience/Experience.jsx";
import {Projects} from "./component/Projects/Projects.jsx";
import {Footer} from "./component/Footer/Footer.jsx";

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
        <Hero/>
        <About/>
      <Experience/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default App