import SectionTitle from '../UI/SectionTitle';
import ContactCardList from './ContactCardList';

function Contact() {
  return (
    <div className='contactDiv'>
      <SectionTitle title='Contact Us' size='large' />
      <ContactCardList />
    </div>
  );
}
export default Contact;
