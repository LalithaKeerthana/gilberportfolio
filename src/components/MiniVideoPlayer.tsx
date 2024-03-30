import React from "react";

const MiniVideoPlayer = () => {
  return (
    <div className="mini-video-player">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9McJm9nqQe4?si=STecUWRiiAvVBx45"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MiniVideoPlayer;
