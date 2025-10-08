import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Star, MessageSquare } from "lucide-react";
import appsData from "../data/appsData";
import { installApp, isInstalled } from "../utils/localStorage";
import { toast } from "react-toastify";
import "../index.css";

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === parseInt(id));
  const [alreadyInstalled, setAlreadyInstalled] = useState(false);

  // Check if app is already installed
  useEffect(() => {
    if (app) {
      setAlreadyInstalled(isInstalled(app.id));
    }
  }, [app]);

  if (!app) {
    return (
      <div className="appdetails-notfound">
        <img src="/assets/error-404.png" alt="Not Found" />
        <h1>App Not Found</h1>
        <Link to="/apps" className="back-btn">Back to Apps</Link>
      </div>
    );
  }

  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  const handleInstall = () => {
    const success = installApp(app.id);
    if (success) {
      setAlreadyInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    } else {
      toast.info(`${app.title} is already installed.`);
    }
  };

  return (
    <div className="appdetails-page">
      {/* Back Link */}
      <div className="appdetails-back">
        <Link to="/apps"><ArrowLeft size={18} /> Back to All Apps</Link>
      </div>

      {/* Header */}
      <div className="appdetails-header">
        <div className="appdetails-image">
          <img src={app.image} alt={app.title} />
        </div>
        <div className="appdetails-info">
          <h1>{app.title}</h1>
          <p className="company">
            Developed by <span>{app.companyName}</span>
          </p>

          <div className="appdetails-metrics">
            <div><Download size={16} className="icon-green" /> {(app.downloads / 1000000).toFixed(1)}M Downloads</div>
            <div><Star size={16} className="icon-yellow" /> {app.ratingAvg.toFixed(1)} Avg Rating</div>
            <div><MessageSquare size={16} className="icon-purple" /> {(app.reviews / 1000).toFixed(0)}K Reviews</div>
          </div>

          <button 
            className={`appdetails-install ${alreadyInstalled ? 'installed' : ''}`}
            onClick={handleInstall}
            disabled={alreadyInstalled}
          >
            {alreadyInstalled ? '✓ Installed' : `Install Now (${app.size} MB)`}
          </button>
          
          {alreadyInstalled && (
            <Link to="/installation" style={{display: 'block', marginTop: '10px', color: '#7b46ff', textDecoration: 'underline'}}>
              View in My Installation
            </Link>
          )}
        </div>
      </div>

      {/* Ratings */}
      <div className="appdetails-ratings">
        <h2>Ratings</h2>
        {app.ratings.map((r, i) => {
          const percent = ((r.count / totalRatings) * 100).toFixed(1);
          return (
            <div key={i} className="appdetails-rating-row">
              <span className="appdetails-rating-label">{r.name}</span>
              <div className="appdetails-rating-bar">
                <div className="appdetails-rating-fill" style={{ width: `${percent}%` }}></div>
              </div>
              <span className="appdetails-rating-percent">{percent}%</span>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="appdetails-desc">
        <h2>Description</h2>
        <p>{app.description}</p>
        <p>Users can create custom work and break intervals, track sessions, and review detailed statistics...</p>
        <p>You can assign each task to a specific Pomodoro session, making your schedule more structured...</p>
        <p>The app provides motivational streaks and achievements, gamifying productivity.</p>
      </div>

      {/* Stats */}
      <div className="appdetails-stats">
        <div>
          <p className="number">{app.reviews.toLocaleString()}</p>
          <p>Reviews</p>
        </div>
        <div>
          <p className="number">{(app.downloads / 1000000).toFixed(1)}M+</p>
          <p>Downloads</p>
        </div>
        <div>
          <p className="number">{app.ratingAvg.toFixed(1)}★</p>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;