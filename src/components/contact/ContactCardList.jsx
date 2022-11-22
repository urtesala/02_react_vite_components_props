import ContactCard from './ContactCard';

function ContactCardList() {
  return (
    <div className='grid container contact'>
      <ContactCard
        icon='fa-location-arrow'
        title='203 Fake St. Mountain View'
      />
      <ContactCard icon='fa-phone' title='+1 232 3235 324' />
      <ContactCard icon='fa-diamond' title='youremail@domain.com' />
    </div>
  );
}

export default ContactCardList;
