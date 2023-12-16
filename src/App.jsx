import styles from "./App.module.css";
console.log(styles)
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from "./components/About/About";
import { Skill } from "./components/Skill/Skill";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
