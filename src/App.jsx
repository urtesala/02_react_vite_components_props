import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className='App container'>
      <Hero title='Info Hero' subtitle='Info subtitle' />
      <OurTeamSection />
      <OurServices />
    </div>
  );
}

export default App;
