import React, { useRef } from "react";
import overlay from "/images/overlay.webp";
import postCardVideo from "/videos/postcard-vd.mp4"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const PostCard = () => {
    const videoRef = useRef(null)
    useGSAP(() =>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".post-card",
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        })
         videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<",
      );
    };
    })

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />
      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition-duration-700">
        <img src={overlay} alt="overly" />
        <video 
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        autoPlay
        src={postCardVideo}/>
        <button className="group-hover:bg-yellow transition duration-700">
            Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};

export default PostCard;
