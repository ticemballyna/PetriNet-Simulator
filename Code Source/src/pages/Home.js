import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen, faInfoCircle,faFileAlt } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import { useNavigate } from 'react-router-dom';
import LogoPng from '../logo/logoPng2.png';
import Demo from '../assets/Demo2.mp4';
import svg1 from '../assets/123.svg';
import svg2 from '../assets/122.svg';
import { Link } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const [isBlinking, setIsBlinking] = useState(false);

 useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prevState => !prevState);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };
  return (
    <div className="relative min-h-screen md:mt-0" style={{ overflow: 'hidden' }}>


      <div className={`svg w-full h-full`} style={{ zIndex: -1 }}>
        <img src={svg1} alt="SVG Image" className={`blink ${isBlinking ? 'opacity-0' : 'opacity-100'}`} style={{ width: '80%', height: '70%', position: 'absolute', bottom: '40%', left: '37%', transform: 'translateX(-50%)' }} />
      </div>
      <div className={`svg w-full h-full`} style={{ zIndex: -1 }}>
        <img src={svg2} alt="SVG Image" className={`blink ${isBlinking ? 'opacity-0' : 'opacity-100'}`} style={{ width: '100%', height: '100%', position: 'absolute', bottom: '10%', left: '58%', transform: 'translateX(-50%)' }} />
      </div>

      <div className="top-bar flex justify-between items-center p-4 ml-20 z-10">
        <div className="flex items-center">
         

          <h2 className="text-xl font-thin ml-5">
          <span className="home-link hover-underline-animation" style={{ color: '#101C28' }}>Page d'accueil</span>
          </h2>
        </div>
        
      </div>
      <div className="sidebar-container gap-4 absolute top-0 left-0 shadow-lg h-full w-20 z-20">
          <div className="sidebar flex flex-col items-center justify-between p-6 h-full">

            <Link to="/" className="logo absolute top-0 left-1/2 mt-1 pt-0 transform -translate-x-1/2 w-24">
                <img src={LogoPng} alt="Logo"  className="w-14 h-12 mr-2 ml-4 mb-8" />  
            </Link>
          <div className="flex flex-col gap-3 items-center pt-8 pb-8 mt-28 mb-10">
            <SidebarIcon icon={faHome} name="Home" onClick={() => navigate('')} />
            <SidebarIcon icon={faBookOpen} name="Guide" onClick={() => navigate('StaticGuide')}  />
            <SidebarIcon icon={faFileAlt} name="Documentation" onClick={() => navigate('Documentation')}  />
          </div>
          <div className="about-us-icon pt-16 pb-0">
            <SidebarIcon icon={faInfoCircle} name="About Us" onClick={() => navigate('About-us')} />
          </div>
        </div>  
      </div>
      <div className={`content  ml-28 flex-grow z-0`}>
      <div className={`content  ml-28 flex-grow z-0`}>
      <div className="DemoContainer">
    <div className="overlay">
        <video src={Demo} autoPlay loop muted className="VideoPlayer" />
    </div>
</div>

       </div>

        <h1 className={`text-5xl px-4 mb-10 mt-20 text-[#008080]`}>PetriGo</h1>
        
        <div className=" max-w-xl px-4 ">
              <p className="text-lg mb-8 mt-8 ">Notre simulateur vous permet d'expérimenter avec ces réseaux de manière interactive, en créant des places, des transitions et des arcs pour représenter les proprietes de chaque réseau crée.
                Plongez dans la modélisation des systèmes , testez des scénarios différents et observez comment les changements se propagent à travers votre réseau. Nous sommes ravis de vous accompagner dans votre voyage à travers le 
                monde fascinant des réseaux de Petri !</p>
                
              <div className="flex justify-center mt-9 relative">
                <button className="btn btn-blue" onClick={() => navigate('Simulation')}>Simuler</button>
                
              </div>
        </div>
        
      </div>
      <div className="footer absolute bottom-0 left-0 right-200 flex justify-center py-4 text-gray-400">
  <p>Tous droits réservés &copy; 2024</p>
</div>

    </div>
  );
}

const SidebarIcon = ({ icon, name, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center group ${hovered ? 'text-white' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick} 
      >
        <FontAwesomeIcon icon={icon} className="text-2xl text-[#008080] mr-4 transition-transform duration-300 ease-in-out transform" />
      </div>
      {hovered && (
        <div className="absolute top-0 font-normal left-full ml-2 bg-[#008080] text-[#fff] px-3 py-1 rounded-full   custom">
        {name}
      </div>
      )}
    </div>
  );
}

export default Home;