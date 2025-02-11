import './App.css';
import About from './components/About';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Homepage />
      <About />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
