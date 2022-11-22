import ServicesGrid from './Grid';
import SectionTitle from './UI/SectionTitle';

function OurServices() {
  return (
    <div className='servicesSection  container'>
      <SectionTitle title='Musu paslaugos' size='large' />
      <ServicesGrid />
    </div>
  );
}

export default OurServices;
