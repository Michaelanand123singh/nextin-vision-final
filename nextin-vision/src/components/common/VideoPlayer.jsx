// src/components/shared/VideoPlayer.jsx
const VideoPlayer = ({ src, poster, className = '' }) => {
    const videoRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
  
    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    return (
      <div className={`relative rounded-lg overflow-hidden ${className}`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          onClick={togglePlay}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-opacity"
          onClick={togglePlay}
        >
          <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
          {isPlaying ? (
            <PauseIcon className="w-16 h-16 text-white" />
          ) : (
            <PlayIcon className="w-16 h-16 text-white" />
          )}
        </button>
      </div>
    );
  };

  export default VideoPlayer;