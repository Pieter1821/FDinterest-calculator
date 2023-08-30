import { Element } from 'react-scroll';
import '../styles/Home.scss';


const Home = () => {
  return (
    <Element name='home' className="home-container">
      <h1>Welcome to the FD Interest Calculator App</h1>
      <p>This app will help you calculate your FD interest.</p>
    </Element>
  );
};

export default Home;
