import Hero from './components/Hero';
import About from './components/About';
import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Hero title='Info Hero' subtitle='Info subtitle' color='blue' />
      <About />
      <OurTeamSection />
      <OurServices />
      <Contact />
    </div>
  );
}

export default App;
