import Icon from '../UI/Icon';

function ContactCard(props) {
  return (
    <div className='flex'>
      <Icon iconName={props.icon} />
      <p className='contactP'>{props.title}</p>
      {props.link ? <p className='link'>{props.link}</p> : ''}
    </div>
  );
}

export default ContactCard;
