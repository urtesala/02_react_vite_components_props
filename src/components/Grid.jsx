import SeviceCard from './SeviceCard';

const cardsArr = [
  {
    title: 'Business Consulting',
    icon: 'fa-address-book',
    link: '/about.html',
  },
  { title: 'Market Analysis', icon: 'fa-free-code-camp', link: '/about.html' },
  { title: 'User Monitoring', icon: 'fa-superpowers', link: '/about.html' },
];

function ServicesGrid() {
  return (
    <div className='grid'>
      <SeviceCard
        title={cardsArr[0].title}
        icon={cardsArr[0].icon}
        link={cardsArr[0].link}
      />
      <SeviceCard
        title={cardsArr[1].title}
        icon={cardsArr[1].icon}
        link={cardsArr[1].link}
      />
      <SeviceCard
        title={cardsArr[2].title}
        icon={cardsArr[2].icon}
        link={cardsArr[2].link}
      />
    </div>
  );
}

export default ServicesGrid;
