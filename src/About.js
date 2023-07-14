import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontext';


const About = () => {

  const {user}=useProductContext();
  const data={
    name:"Megazon:Your Ultimate Shopping Zone",
  };
  return (
  <>
  {user}
  <HeroSection myData={data}/>{" "}
  </>
  );
  
};

export default About;
