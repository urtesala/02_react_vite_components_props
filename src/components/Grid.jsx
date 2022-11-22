import SeviceCard from './SeviceCard';

function ServicesGrid() {
  return (
    <div className='grid'>
      <SeviceCard
        title='Business Consulting'
        icon='fa-address-book'
        link='/about.html'
      />
      <SeviceCard
        title='Market Analysis'
        icon='fa-free-code-camp'
        link='/about.html'
      />
      <SeviceCard
        title='User Monitoring'
        icon='fa-superpowers'
        link='/about.html'
      />
      <SeviceCard
        title='Insurance Consulting'
        icon='fa-balance-scale'
        link='/about.html'
      />
      <SeviceCard
        title='Financial Investment'
        icon='fa-bomb '
        link='/about.html'
      />
      <SeviceCard
        title='Financial Management'
        icon='fa-car f'
        link='/about.html'
      />
    </div>
  );
}

export default ServicesGrid;
