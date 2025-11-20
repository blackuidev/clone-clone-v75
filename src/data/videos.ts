export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  uploadTime: string;
  videoUrl: string;
  description: string;
}

export const videos: Video[] = [
  {
    id: '1',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-0-7216-0-0-0-0',
    title: 'Never Gonna Give You Up - Rick Astley',
    channelName: 'Rick Astley',
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJyN9L_m2-3R49i-l-j4_gQ2_0g=s100-c-k-c0xffffffff-no-rj-mo',
    views: '1.5B views',
    uploadTime: '14 years ago',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'The official video for “Never Gonna Give You Up” by Rick Astley. 

Listen to “Never Gonna Give You Up” – https://rickastley.lnk.to/n_g_g_y_u!ytp

🔔 Subscribe to the Rick Astley YouTube channel: https://rickastley.lnk.to/YTSubscribe

Follow Rick Astley:
Website: https://www.rickastley.co.uk/
Twitter: https://twitter.com/rickastley
Facebook: https://www.facebook.com/RickAstley/
Instagram: https://www.instagram.com/rickastleyofficial/

#RickAstley #NeverGonnaGiveYouUp #OfficialVideo',
  },
  {
    id: '2',
    thumbnail: 'https://i.ytimg.com/vi/bMJoJp7I38w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-0-7216-0-0-0-0',
    title: 'Learn React in 30 Minutes',
    channelName: 'Web Dev Simplified',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AIdro_k3wNq32f8B3N2_r29w-y_q1Q=s100-c-k-c0xffffffff-no-rj-mo',
    views: '2.5M views',
    uploadTime: '1 year ago',
    videoUrl: 'https://www.youtube.com/embed/bMJoJp7I38w',
    description: 'Learn the basics of React in 30 minutes. This video covers components, props, state, and hooks to get you started with React development quickly.',
  },
  {
    id: '3',
    thumbnail: 'https://i.ytimg.com/vi/xvFZjo5PgG0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6j7J7_V-0-0-0-0-0',
    title: 'Aesthetic Lo-fi Beats to Study/Relax To',
    channelName: 'Lofi Girl',
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJz-v0_p-qQ-q-q-q-q-q-q-q=s100-c-k-c0xffffffff-no-rj-mo',
    views: '100M views',
    uploadTime: '3 years ago',
    videoUrl: 'https://www.youtube.com/embed/xvFZjo5PgG0',
    description: 'Chill out with some aesthetic lo-fi beats. Perfect for studying, relaxing, or just unwinding after a long day. Live stream 24/7.',
  },
  {
    id: '4',
    thumbnail: 'https://i.ytimg.com/vi/QhLz-K6u26Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-0-7216-0-0-0-0',
    title: 'The Future of AI: What to Expect',
    channelName: 'Kurzgesagt – In a Nutshell',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AIdro_k3wNq32f8B3N2_r29w-y_q1Q=s100-c-k-c0xffffffff-no-rj-mo',
    views: '50M views',
    uploadTime: '6 months ago',
    videoUrl: 'https://www.youtube.com/embed/QhLz-K6u26Q',
    description: 'Artificial intelligence is rapidly advancing. What does the future hold for humanity as AI becomes more powerful and integrated into our lives?',
  },
  {
    id: '5',
    thumbnail: 'https://i.ytimg.com/vi/D0Unqg42FzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-0-7216-0-0-0-0',
    title: 'React Hooks Tutorial - Build a Custom Hook',
    channelName: 'Traversy Media',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AIdro_k3wNq32f8B3N2_r29w-y_q1Q=s100-c-k-c0xffffffff-no-rj-mo',
    views: '1.2M views',
    uploadTime: '2 years ago',
    videoUrl: 'https://www.youtube.com/embed/D0Unqg42FzI',
    description: 'Learn how to create and use custom React hooks to reuse stateful logic across multiple components. This tutorial covers the basics and a practical example.',
  },
  {
    id: '6',
    thumbnail: 'https://i.ytimg.com/vi/pKd0J6kCq7Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-0-7216-0-0-0-0',
    title: 'The History of the Internet',
    channelName: 'TED-Ed',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AIdro_k3wNq32f8B3N2_r29w-y_q1Q=s100-c-k-c0xffffffff-no-rj-mo',
    views: '20M views',
    uploadTime: '5 years ago',
    videoUrl: 'https://www.youtube.com/embed/pKd0J6kCq7Q',
    description: 'Explore the fascinating history of the internet, from its early beginnings as ARPANET to the global network we use today. Discover the key innovations and figures.',
  },
  {
    id: '7',
    thumbnail: 'https://i.ytimg.com/vi/PkZNo7oNFg8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-0-7216-0-0-0-0',
    title: 'JavaScript Full Course for Beginners',
    channelName: 'freeCodeCamp.org',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AIdro_k3wNq32f8B3N2_r29w-y_q1Q=s100-c-k-c0xffffffff-no-rj-mo',
    views: '50M views',
    uploadTime: '2 years ago',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7oNFg8',
    description: 'Master JavaScript with this comprehensive course for beginners. Covers variables, data types, functions, objects, arrays, DOM manipulation, and more.',
  },
  {
    id: '8',
    thumbnail: 'https://i.ytimg.com/vi/OB_b_c04r_g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-0-7216-0-0-0-0',
    title: 'The Science of Sleep',
    channelName: 'Vsauce',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AIdro_k3wNq32f8B3N2_r29w-y_q1Q=s100-c-k-c0xffffffff-no-rj-mo',
    views: '30M views',
    uploadTime: '4 years ago',
    videoUrl: 'https://www.youtube.com/embed/OB_b_c04r_g',
    description: 'What happens when we sleep? Why do we dream? Explore the fascinating science behind sleep and its vital role in our lives.',
  },
];
