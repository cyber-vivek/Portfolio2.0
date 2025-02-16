import './App.css';
import About from './components/About';
import Connect from './components/Connect';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

function App() {
  return (
    <div>
      <Homepage />
      <About />
      <Experience/>
      <Skills/>
      <Projects/>
      {/* <Education/> */}
      {/* <Timeline/> */}
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
