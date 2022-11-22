function Hero(props) {
  const heroClasses = props.color === 'red' ? 'hero red' : 'hero';

  function caclulateClass() {
    let rezClass = 'hero ';
    if (props.color === 'red') {
      rezClass = rezClass + 'red';
    }
    if (props.color === 'green') {
      rezClass = rezClass + 'green';
    }

    return rezClass;
  }

  return (
    <div className={caclulateClass()}>
      <h1 className='heroTitle'>{props.title}</h1>
      <h2 className='heroSubtitle'>{props.subtitle}</h2>
    </div>
  );
}
export default Hero;
