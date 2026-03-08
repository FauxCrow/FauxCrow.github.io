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
    if (!isActive && playerRef.current) {
      playerRef.current.pauseVideo();
      playerRef.current.seekTo(0);
    }
  }, [isActive]);

  return (
    <div className="min-w-full flex justify-center items-center">
      {isVideo ? (
        <div className="w-full aspect-video mt-3 rounded-2xl overflow-hidden shadow-lg">
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
          alt="Slide"
          className="w-full rounded-2xl mt-3 object-cover aspect-video"
        />
      )}
    </div>
  );
}