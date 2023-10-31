import ReactPlayer from "react-player";
import React, { useRef } from "react";
const VIDEO_PATH = "https://youtu.be/btjBNKP49Rk";
function PlayerComponent() {
  const playerRef = useRef(null);
  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
        width="100%"
        height="100%"
        className="react-player"
      />
    </div>
  );
}
export default PlayerComponent;
