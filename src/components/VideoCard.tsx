import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface VideoCardProps {
  video: {
    id: string;
    thumbnail: string;
    title: string;
    channelName: string;
    channelAvatar: string;
    views: string;
    uploadTime: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`}>
      <Card className="w-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <img src={video.thumbnail} alt={video.title} className="w-full h-auto object-cover aspect-video" />
        <CardContent className="p-3">
          <h3 className="text-sm font-semibold line-clamp-2 mb-1">{video.title}</h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <Avatar className="h-6 w-6">
              <AvatarImage src={video.channelAvatar} alt={video.channelName} />
              <AvatarFallback>{video.channelName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{video.channelName}</span>
          </div>
          <p className="text-xs text-muted-foreground">{video.views} • {video.uploadTime}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
