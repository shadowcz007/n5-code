'use client';
import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || !isLoaded) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // 添加错误处理
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("播放失败:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        disabled={!isLoaded}
        className={`
          bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded
          ${!isLoaded && 'opacity-50 cursor-not-allowed'}
        `}
      >
        {isPlaying ? '暂停音乐' : '播放音乐'}
      </button>
    </div>
  );
} 