import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import appsData from "../data/appsData";

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === parseInt(id));

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-300">
        <img src="./assets/error-404.png" alt="Not Found" className="w-64 mb-4" />
        <h1 className="text-2xl font-semibold mb-2">App Not Found</h1>
        <Link
          to="/apps"
          className="px-6 py-2 mt-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
        >
          Back to Apps
        </Link>
      </div>
    );
  }


  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white py-10 px-5 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full max-w-5xl mb-6">
        <Link
          to="/apps"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to All Apps
        </Link>
      </div>

      {/* Top Card */}
      <div className="max-w-5xl w-full bg-[#131a29] rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-start gap-10">
        {/* App Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={app.image}
            alt={app.title}
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-400">{app.companyName}</p>

          {/* Ratings, Size, Downloads */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <span className="text-yellow-400 font-semibold">
              ★ {app.ratingAvg.toFixed(1)}
            </span>
            <span>• {app.size} MB</span>
            <span>• {(app.downloads / 1000000).toFixed(1)}M+ Downloads</span>
          </div>

          {/* Install Button */}
          <button className="mt-5 px-8 py-3 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:opacity-90 font-semibold text-black transition shadow-lg">
            Install Now ({app.size} MB)
          </button>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-sm leading-relaxed">
            {app.description}
          </p>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="max-w-5xl w-full bg-[#131a29] mt-10 p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">User Ratings</h2>
        <div className="space-y-4">
          {[...app.ratings].reverse().map((r, i) => {
            const percent = ((r.count / totalRatings) * 100).toFixed(1);
            return (
              <div key={i} className="flex items-center gap-4">
                <span className="w-16 text-gray-400">{r.name}</span>
                <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm text-gray-400 text-right">
                  {percent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* App Stats */}
      <div className="max-w-5xl w-full mt-10 bg-[#131a29] rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-gray-300 shadow-lg">
        <div>
          <p className="text-2xl font-bold text-white">
            {app.reviews.toLocaleString()}
          </p>
          <p className="text-sm text-gray-400">Reviews</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">
            {(app.downloads / 1000000).toFixed(1)}M+
          </p>
          <p className="text-sm text-gray-400">Downloads</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">
            {app.ratingAvg.toFixed(1)}★
          </p>
          <p className="text-sm text-gray-400">Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
