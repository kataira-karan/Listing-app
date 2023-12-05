const About = () => {
  return (
    <div className="detailPageContainer">
      <h1 className="header">About App</h1>

      <li> This is first nextJs Application created. </li>
      <li> Learned basics structure of NextJs Application </li>
      <li> Focused on difference between react and nextjs </li>
      <li> Learned Styling in NextJs </li>
      <li>
        {" "}
        Used getStaticPaths and getStaticProps to make a fetch request and
        display ditails of users{" "}
      </li>
    </div>
  );
};

export default About;
