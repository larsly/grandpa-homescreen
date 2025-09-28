import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const links = [
    { name: 'Email', url: 'https://mail.google.com', color: 'primary' },
    { name: 'Weather', url: 'https://weather.com', color: 'success' },
    { name: 'News', url: 'https://news.google.com', color: 'danger' },
    { name: 'YouTube', url: 'https://youtube.com', color: 'dark' },
    { name: 'Facebook', url: 'https://facebook.com', color: 'info' },
    { name: 'Amazon', url: 'https://amazon.com', color: 'warning' },
    { name: 'Banking', url: 'https://bankofamerica.com', color: 'secondary' },
    { name: 'Photos', url: 'https://photos.google.com', color: 'light' }
  ];

  return (
    <div className="container-fluid p-4" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', minHeight: '100vh' }}>

      <div className="card shadow-lg mb-4">
        <div className="card-body text-center p-4">
          <h1 className="display-1 fw-bold mb-3">{formatTime(currentTime)}</h1>
          <h2 className="display-6 text-muted mb-3">{formatDate(currentTime)}</h2>
          <div className="badge bg-primary fs-4 p-3">72°F Sunny</div>
        </div>
      </div>

      <div className="row g-3">
        {links.map((link, index) => (
          <div key={index} className="col-6 col-lg-3">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-${link.color} w-100 text-decoration-none`}
              style={{ height: '120px', fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              <div className="d-flex flex-column justify-content-center h-100">
                <div>{link.name}</div>
                <small>Click to visit</small>
              </div>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;