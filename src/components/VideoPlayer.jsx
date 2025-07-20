import { motion } from "framer-motion";
import { useState, useRef } from "react";

const VideoPlayer = ({ 
  videoSrc = null, 
  posterSrc = null, 
  title = "Fiber Network Demo",
  subtitle = "Click to play video",
  showOverlay = true 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Video Container */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-900">
        {videoSrc ? (
          // Actual video element
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={posterSrc}
            onLoadedData={handleVideoLoad}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Placeholder content
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div 
                className="w-24 h-24 bg-gradient-to-r from-[#00A39B] to-[#008F87] rounded-full flex items-center justify-center mb-4 mx-auto"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(0, 163, 155, 0.4)",
                    "0 0 20px rgba(0, 163, 155, 0.6)",
                    "0 0 0 rgba(0, 163, 155, 0.4)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <p className="text-white text-lg font-semibold">{title}</p>
              <p className="text-gray-400 text-sm mt-2">{subtitle}</p>
            </div>
          </div>
        )}

        {/* Network Status Overlay */}
        {showOverlay && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded-lg backdrop-blur-sm">
            <div className="text-sm">
              <div className="font-semibold">Network Status</div>
              <motion.div 
                className="text-green-400"
                animate={{
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ● Connected
              </motion.div>
              <div className="text-xs text-gray-300">Speed: 10 Gbps</div>
            </div>
          </div>
        )}

        {/* Animated connection lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(0, 163, 155, 0.1) 0%, transparent 30%)",
              "radial-gradient(circle at 70% 60%, rgba(0, 163, 155, 0.1) 0%, transparent 30%)",
              "radial-gradient(circle at 30% 40%, rgba(0, 163, 155, 0.1) 0%, transparent 30%)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Loading indicator */}
        {videoSrc && !isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              className="w-8 h-8 border-2 border-[#00A39B] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        )}
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-4 right-4">
        <motion.button
          className="w-12 h-12 bg-gradient-to-r from-[#00A39B] to-[#008F87] rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(0, 163, 155, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Floating elements around video */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-[#00A39B] rounded-full opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#008F87] rounded-full opacity-60"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default VideoPlayer; 