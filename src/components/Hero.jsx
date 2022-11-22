function Hero({ title, subtitle, color }) {
  return (
    <div className='heroDiv'>
      <h1 className='heroTitle'>{title}</h1>
      <h2 className='heroSubtitle'>{subtitle}</h2>
    </div>
  );
}
export default Hero;
