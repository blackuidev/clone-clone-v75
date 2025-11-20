import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '@/data/videos';
import VideoCard from '@/components/VideoCard';

const VideoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentVideo = videos.find((video) => video.id === id);

  if (!currentVideo) {
    return <div className="p-4 text-center">Video not found.</div>;
  }

  const suggestedVideos = videos.filter((video) => video.id !== id).slice(0, 5); // Show top 5 others

  return (
    <div className="video-page-layout">
      <div className="video-main-column">
        <div className="video-player-container rounded-lg overflow-hidden mb-4">
          <iframe
            className="w-full h-full absolute top-0 left-0"
            src={`${currentVideo.videoUrl}?autoplay=1`}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-details">
          <h1 className="text-xl font-bold mb-2">{currentVideo.title}</h1>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <img src={currentVideo.channelAvatar} alt={currentVideo.channelName} className="w-8 h-8 rounded-full" />
              <span>{currentVideo.channelName}</span>
            </div>
            <div>
              <span>{currentVideo.views} • {currentVideo.uploadTime}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-line">{currentVideo.description}</p>
        </div>
      </div>

      <div className="video-sidebar-column">
        <h2 className="text-lg font-semibold mb-4">Suggested Videos</h2>
        <div className="suggested-videos-grid">
          {suggestedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
