function SectionTitle(props) {
  console.log('props ===', props);
  return (
    <div>
      <h2 className='sectionTitle'>{props.title}</h2>
      <p className='subtitle'></p>
    </div>
  );
}

export default SectionTitle;
