import React from 'react'
import '../App.css'
import { useEffect , useRef } from 'react'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'
const Yes:React.FC = () => {
   const iframeRef = useRef<HTMLIFrameElement>(null);
   const navigate = useNavigate();

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        { method: 'play' },
        'https://open.spotify.com'
      );
    }
  }, []);
  return (
    <>
     <BackButton onClick={() => navigate(-1)} />
    <div>
         <p style={{fontSize:'3rem'}}> 🎉 💜 🌸 🦋</p>
        <h1 className="text-purple">Princess said Yes!!</h1>
        <p className="text-default">
            You just made me the happiest person <br/> alive 🥰 <br/> I can't wait to spend Valentine's with you 💐
        </p>
    </div>
    <div style={{margin:'2rem 0'}}/>
    <p className="text-default">Pls Play and Listen my Pookie 💜</p>
    <iframe
      ref={iframeRef}
      data-testid="embed-iframe"
      style={{ borderRadius: 12 }}
      src="https://open.spotify.com/embed/track/0Tel1fmuCxEFV6wBLXsEdk?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    </>
  )
}

export default Yes