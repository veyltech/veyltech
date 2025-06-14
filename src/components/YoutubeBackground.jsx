import React from 'react';

const YoutubeBackground = () => {
  // Daha modern bir kodlama/teknoloji videosu kullanıyoruz
  // Bu video: Abstract Digital Technology Code Background
  return (
    <div className="youtube-background">
      <iframe
        src="https://www.youtube.com/embed/vS7-zc6Eckc?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=vS7-zc6Eckc&showinfo=0&rel=0&enablejsapi=1&modestbranding=1&iv_load_policy=3"
        title="Background Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-overlay"></div>
    </div>
  );
};

export default YoutubeBackground; 