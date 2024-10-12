import React from 'react';
import './AboutUs.css';
import iman  from '../TeamPictures/Iman.jpg';
import lyna from '../TeamPictures/lyna.jpg';
import Rayan from '../TeamPictures/Rayan.jpg';
import maroua from '../TeamPictures/maroua.jpg';
import ines from '../TeamPictures/ines.jpg';
import chourouk from '../TeamPictures/chourouk.PNG';

const Body = () => {
  return (
    <div className="bodyy">
    <div className="container">
    <div className="containerligne">

    <div className="profil">
    <img src={Rayan} alt={Rayan} />
    <h3>SMARA Rayane Rahmat Errahmane </h3>
    <p>2CP-ESI </p>
    <p>mr_smara@esi.dz</p>
    </div>
    
    
    <div className="profil">
    <img src={maroua} alt={maroua}/>
    <h3>OGAB MAROUA </h3>
    <p>2CP-ESI </p>
    <p>mm_ogab@esi.dz</p>
    </div>

    <div className="profil">
    <img src={lyna} alt={lyna} />
    <h3>TICEMBAL LYNA </h3>
    <p>2CP-ESI </p>
    <p>ml_ticembal@esi.dz </p>
    </div>
    </div>
    

    <div className="containerligne">
    <div className="profil">
    <img src={iman} alt={iman} />
    <h3>EL BAR NOUR EL IMANE</h3>
    <p>2CP-ESI </p>
    <p>mn_elbar@esi.dz</p>
    </div>

    <div className="profil">
    <img src={chourouk} alt={chourouk}/>
    <h3>CHAKER CHOUROUK</h3>
    <p>2CP-ESI </p>
    <p>mc_chaker@esi.dz</p>
    </div>

    <div className="profil">
    <img src={ines}  alt={ines}/>
    <h3>MEZDOUR INES</h3>
    <p>2CP-ESI </p>
    <p>mh_mezdour@esi.dz</p>
    </div>
    </div>

    <div className="footer" style={{ textAlign: 'center' }}>
      <p>Contact us via: <a href="mailto:petrig0petrig0@gmail.com">petrig0petrig0@gmail.com</a></p>
    </div>

    </div>
    </div>
  );
};

export default Body;