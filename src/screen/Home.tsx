import React from 'react'
import DynamicButton from '../components/DynamicButton'
import TabButton from '../components/TabButton'
import { useNavigate } from 'react-router-dom'
import NoButton from '../components/NoButton'
import { useRef , useState } from 'react'
import '../App.css'
const Home:React.FC = () => {
  const navigate = useNavigate()
   const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlaySong = () => {
    setIsPlaying(!isPlaying);
    if (iframeRef.current) {
      iframeRef.current.focus();
      console.log("Playing the song! 🎵");
    }
  };
 const labels = [
    "No 🙈",
    "Are You sure, princess?",
    "Think about it ... 🙂 ",
    "Don't do this to me 🙂 ",
    "I'll buy you Berry Blast  🍷",
    "Pretty Please 💜 ",
    "Don't break my heart 🙂 ",
    "Last Chance! 🙃",
    "Okay I'm gonna Cry..",
    "you're killing me, Princess! 🦋"
  ];

 const generatePaddings = (num: number, start: [number, number], end: [number, number]) => {
    const result: string[] = [];
    for (let i = 0; i < num; i++) {
      const topBottom = start[0] + ((end[0] - start[0]) * i) / (num - 1);
      const leftRight = start[1] + ((end[1] - start[1]) * i) / (num - 1);
      result.push(`${topBottom}rem ${leftRight}rem`);
    }
    return result;
  };
const myresume = 'https://douglas-portfoilo.vercel.app/Apology.pdf'
    const downloadFileAtURL = (url:any) =>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download" , fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
  
  const paddings = generatePaddings(labels.length, [1, 1.5], [4, 6]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNo = () => {
    if (currentIndex < labels.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
    }
  };


  const handleClickYes = () => {
    navigate("/yes");
  };
   const yesPadding = paddings[currentIndex % paddings.length];
  return (
    <div>
      <div>
        <p style={{fontSize:'3rem'}}>💜 📖 🌸 🦋</p>
         <div style={{display:"flex" , flexDirection:'column' , gap:'1rem' , justifyContent:"center" , alignItems:'center' , marginBottom:'2rem'}}>
          
          <TabButton  
          label=' 🎵 Tap to Play our Song' 
          backgroundColor='#D8C3F0' 
          color='#000000' 
           onClick={handlePlaySong}
          />
       {isPlaying && (
        <iframe
          ref={iframeRef}
          data-testid="embed-iframe"
          style={{ borderRadius: "12px", marginTop: "20px" }}
          src="https://open.spotify.com/embed/track/0M3HkE321xpCbCYqVKzr1q?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title="Spotify Track"
          loading="lazy"
        ></iframe>
      )}
           <TabButton  
          label='📖 Open our litte Story' 
          backgroundColor='#D8C3F0' 
          color='#000000' 
          onClick={()=> (navigate("/story"))}
          />
          <TabButton  
          label='💌  View My Appology Letter ' 
          backgroundColor='#D8C3F0' 
          color='#000000' 
          onClick={() => downloadFileAtURL(myresume)}
          />
         </div>
        <div>
          <h1 className="text-purple">Princess...</h1>
        <div>
            <p className="text-default">Just like the stories you love to read, <br/> I wanted to write a small moments just for us .</p>
          <p className="text-default">Surrounded by purple dreams just like your phone colour ,flowers and <br/> butterflies..</p>
        <p className="text-default">I have one very important question for you  ☁️</p>
        </div>
        <div>
          <h1 className="text-purple">Will you be my <br/> Valentine ?</h1>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem' , gap:'1rem'}}>
          <DynamicButton   
          label=' Yes 💜' 
          backgroundColor='#4B0082' 
          color='#FFFFFF' 
          onClick={handleClickYes}
             padding={paddings[currentIndex]}
          />
            <NoButton   
           label={labels[currentIndex]}
          backgroundColor='whitesmoke' 
          color='#00000' 
          onClick={handleClickNo}
          />

        </div>
       
        </div>
      </div>
       <p>A princess deserves a special Valentine  ✨</p>
    </div>
  )
}

export default Home