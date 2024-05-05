import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { CupImage } from "../../../assets";

function VideoComponent() {
  const [play, SetPlay] = useState(true);
  const vidRef = useRef(null);
  function handlePlayPause() {
    SetPlay((prew) => (prew = !prew));
    if (play) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  }
  return (
    <div className="relative w-full h-[75vh] bg-[#EFEFEE] shadow-xl text-center pt-4">
      <video
        ref={vidRef}
        loop
        className="rounded-2xl object-fill w-[98%] h-full"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <button
        className="absolute top-[40%] left-[47%] rounded-full border-none bg-white"
        onClick={handlePlayPause}
      >
        <FaPlay className="text-2xl text-[#23BDEE] m-4" />
      </button>
      <div className="absolute bottom-[7%] right-[7%]">
        <img className="w-[8rem] h-auto" src={CupImage} alt="Image with Cup" />
      </div>
    </div>
  );
}

export default VideoComponent;
