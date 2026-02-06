import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import age from '../../src/assets/images/age.jpg'
import blind from '../../src/assets/images/blind.jpg'
import location from '../../src/assets/images/location.jpg'
import pookie from '../../src/assets/images/pookie.jpg'
import tinder from '../../src/assets/images/tinder.png'
import call from '../../src/assets/images/call.png'
import video from '../../src/assets/images/video.jpg'
import app from '../../src/assets/images/app.jpg'
import end from '../../src/assets/images/end.jpg'
import pin from '../../src/assets/images/ pin.jpg'

const Story:React.FC = () => {
    const images = [
        tinder,
        app,
  age,
  blind,
  call,
  location,
  video,
//   pookie,
  pin,
  end
  ];
 
 const navigate = useNavigate();
  return (
   <div>
    <BackButton onClick={() => navigate(-1)} />
     <div className="gallery-container" style={{marginTop:'2rem'}}>
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
   </div>
  )
}

export default Story