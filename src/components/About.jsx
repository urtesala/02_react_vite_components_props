import SeviceCard from './SeviceCard';

function About() {
  return (
    <div className='grid container about '>
      <SeviceCard
        title='Business Consulting'
        icon='fa-eye'
        link='/about.html'
      />
      <SeviceCard
        title='Business Consulting'
        icon='fa-leaf'
        link='/about.html'
      />
      <img src='/img/about.webp' alt='team' />
    </div>
  );
}

export default About;
