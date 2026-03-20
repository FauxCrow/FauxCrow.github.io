import { useEffect, useRef } from "react";
import YouTube from 'react-youtube';

export function MediaSlide({ item, isActive }) {
  const isVideo = item.type == "youtube"
  const playerRef = useRef(null);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  useEffect(() => {
  if (!isActive && playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
    try {
      playerRef.current.pauseVideo();
    } catch (err) {
      console.log("YouTube bridge interrupted safely");
    }
  }
}, [isActive]);

  return (
    <div className="min-w-full flex justify-center items-center">
      {!isActive && (
        <div className="absolute inset-0 z-10 bg-transparent cursor-default" />
      )}

      {isVideo ? (
        <div className="w-full aspect-video rounded-2xl md:mt-3 overflow-hidden shadow-lg">
          <YouTube
            videoId={item.url}
            opts={opts}
            onReady={onReady}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </div>
      ) : (
        <img
          src={item.url}
          alt="Media Slide for project"
          className="w-full rounded-2xl md:mt-3 object-cover aspect-video"
        />
      )}
    </div>
  );
}