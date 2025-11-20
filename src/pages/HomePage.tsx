import React from 'react';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/data/videos';

const HomePage: React.FC = () => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default HomePage;
