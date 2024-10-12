import React, { useState }  from 'react';
import './StaticGuide.css';
import { Link } from 'react-router-dom';
import LogoPng from '../logo/logoPng2.png';
import { IconContext } from 'react-icons';
import 'reactflow/dist/style.css';
import  {  MarkerType } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay,faStepForward , faStop, faXmark, faTrash,faClock,faExpand,faSave } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player' ; 
import video1 from '../videos/place.mp4';
import video2 from '../videos/transition1.mp4' ; 
import video3 from '../videos/transition2.mp4' ; 
import video4 from '../videos/arc1.mp4' ; 
import video5 from '../videos/arc2.mp4' ; 
import video6 from '../videos/simuler.mp4' ; 
import video7 from '../videos/stepBystep.mp4' ; 
import video8 from '../videos/vitesse.mp4' ; 
import video9 from '../videos/pause.mp4' ;  
import video10 from '../videos/arreter.mp4' ; 
import video11 from '../videos/supprimer.mp4' ; 
import video12 from '../videos/save.mp4' ; 
import video13 from '../videos/reset.mp4' ; 

const StaticGuide = () => {


  const [videoUrl1, setVideoUrl1] = useState(video1); 
  const [videoUrl2, setVideoUrl2] = useState(video6); 
  const [videoUrl3, setVideoUrl3] = useState(video11); 



  const handleVideoChange1 = (newVideoUrl) => {
    setVideoUrl1(newVideoUrl);
  };

  const handleVideoChange2 = (newVideoUrl) => {
    setVideoUrl2(newVideoUrl);
  };

  const handleVideoChange3 = (newVideoUrl) => {
    setVideoUrl3(newVideoUrl);
  };
  
   


    return (
       
      <div className="static-guide">

        <div className="body-container">
          <header className="header flex justify-between items-center h-12 mx-auto px-4 bg-[#20B2AA]">
                <Link to="/" className="logo">
                    <img src={LogoPng} alt="Logo" className="w-16 h-10 mr-2 mb-4" />  
                </Link>
          </header>
          <div className='wrapper'>
            <div className='navbar-container'>
              <div className='box'>
                  <div className="navbar1">
                                  <div className="group">

                                  <div className="icon-container" id='shape-place' onClick={() => handleVideoChange1(video1)}>
                                      <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            color: 'white',
                                            cursor: 'pointer',
                                          }}
                                          >
                                      <circle cx="12" cy="12" r="10" fill="white" stroke="black" stroke-width="1" />
                                    </svg>
                                    </div>

                              

                                    <div className="icon-container" id='shape-transition1' onClick={() => handleVideoChange1(video2)}>

                                      <svg
                                        width="17"
                                        height="18"
                                        viewBox="0 0 18 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          color: 'white',
                                          cursor: 'pointer',
                                          borderRadius: '2px',
                                        }}
                                        
                                      >
                                        <rect x="2.13672" y="2.14453" width="13.7646" height="19.7646" fill="black" stroke="black" stroke-width="2" rx="2" />
                                      </svg>
                                    </div>

                                    <div className="icon-container" id='shape-transition2' onClick={() => handleVideoChange1(video3)} >
                                      <svg
                                        width="17"
                                        height="19"
                                        viewBox="0 0 18 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          color: 'white',
                                          cursor: 'pointer',
                                          borderRadius: '2px',
                                        }}
                                        
                                      >
                                  <rect x="2.13672" y="2.14453" width="13.7646" height="19.7646" fill="white" stroke="black" stroke-width="1" rx="2" />
                                </svg>
                                    </div>


                                    <div className="icon-container" id='shape-arc1' onClick={() => handleVideoChange1(video4)} >
                                        <svg
                                              width="17"
                                              height="17"
                                              viewBox="0 0 20 20"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              style={{ color: 'white', cursor: 'pointer'  }}
                                            >
                                      <path d="M20.1784 0.114041L5.03404 4.11779L16.0215 14.5219L20.1784 0.114041ZM1.90913 20.3015L12.5411 9.61064L10.5628 7.33855L0.025843 18.0206L1.90913 20.3015Z" fill="black" />
                                    </svg>
                                    </div>

                                    <div className="icon-container"  id='shape-arc2' onClick={() => handleVideoChange1(video5)} >
                                      <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                      >
                                        <line x1="16.3861" y1="4.44301" x2="1.09099" y2="19.7289" stroke="black" stroke-width="2" />
                                        <circle cx="14.028" cy="6.57446" r="5.95" fill="white" stroke="black" stroke-width="1" />
                                      </svg>
                                    </div>
                                  
                                  </div>
                  </div>
                  <div className='video-container'>
                    <video src={videoUrl1} width="600" height="400" controls="controls" autoplay="true" loop ="true"/>
                  </div>
              </div>
             
              <div className='box'>
                <div className="navbar2">
                                          <div className="group">
                                              <div className="icon-container" id="shape-play" onClick={() => handleVideoChange2(video6)} >
                                                <FontAwesomeIcon
                                                    icon={faPlay}
                                                    style={{
                                                      color: 'white',
                                                      cursor: 'pointer'
                                                    }}
                                                    
                                                  />
                                              </div>

                                              <div className="icon-container" id="shape-nextStep" onClick={() => handleVideoChange2(video7)} >
                                                <FontAwesomeIcon
                                                  icon={faStepForward}
                                                  style={{
                                                    color: 'white',
                                                    cursor: 'pointer'
                                                  }}
                                                  
                                                />
                                              </div>

                                              <div className="icon-container" id="shape-clock" onClick={() => handleVideoChange2(video8)} >
                                                <FontAwesomeIcon
                                                  icon={faClock}
                                                  style={{
                                                    color: 'white',
                                                    cursor: 'pointer'
                                                  }}
                                                  
                                                />
                                              </div>

                                              <div className="icon-container" id="shape-pause" onClick={() => handleVideoChange2(video9)} >
                                                  <FontAwesomeIcon
                                                    icon={faPause}
                                                    style={{
                                                      color: 'white',
                                                      cursor: 'pointer'
                                                    }}
                                                    
                                                  />
                                              </div>

                                              <div className="icon-container" id="shape-stop" onClick={() => handleVideoChange2(video10)} >
                                                <FontAwesomeIcon
                                                  icon={faStop}
                                                  style={{
                                                    color: 'white',
                                                    cursor: 'pointer'
                                                  }}
                                                  
                                                />
                                              </div>
                                            </div>
                </div>
                <div className='video-container'>
                    <video src={videoUrl2} width="600" height="400" controls="controls" autoplay="true" loop ="true"/>
                </div>
              </div>
            </div>

        <div className='box'>
          <div className="navbar3">
                
                      <div className="group">
                        <div className="icon-container" id="shape-exit" onClick={() => handleVideoChange3(video11)} >
                          <FontAwesomeIcon
                            icon={faXmark}
                            style={{
                              color: 'white',
                              cursor: 'pointer'
                            }}
                          />
                        </div>

                      <div className="icon-container" id="shape-save" onClick={() => handleVideoChange3(video12)}>
                          <FontAwesomeIcon
                            icon={faSave}
                            style={{
                              color: 'white',
                              cursor: 'pointer'
                            }}
                            
                          />
                        </div>

                        <div className="icon-container" id="shape-reset" onClick={() => handleVideoChange3(video13)}>
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{
                              color: 'white',
                              cursor: 'pointer'
                            }}
                            
                          />
                        
                        </div>

                      </div>
                      
          </div>
          <div className='video-container'>
                    <video src={videoUrl3} width="700" height="400" controls="controls" autoplay="true" loop ="true"/>
          </div>
        </div>

            
          </div>
          
          

          
        </div>

      </div>
        
    );
}

export default StaticGuide;