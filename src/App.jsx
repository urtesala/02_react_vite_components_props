import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import Hero from './components/Hero';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Hero title='Info Hero' subtitle='Info subtitle' />
      <About />
      <OurTeamSection />
      <OurServices />
    </div>
  );
}

export default App;
