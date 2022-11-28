import "./Rating.css";
import "../../src/global.css";
import { useState, useEffect } from "react";

export default function Rating() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(import.meta.env.VITE_GITHUB_API)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const downloadCount = data?.assets[0].download_count;

  return (
    <div className="rating">
      <div className="rating-stars">
        <div className="stars">
          <h1 className="star-text">0.0 ★</h1>
          <h1 className="star-subtext">0 Reviews</h1>
        </div>
        <div className="downloads">
          <h1 className="downloads-text">{downloadCount}+</h1>
          <h1 className="downloads-subtext">Downloads</h1>
        </div>
        <div className="suggestions">
          <h1 className="suggestions-text">ⓘ</h1>
          <h1 className="suggestions-subtext">Arquitetura</h1>
        </div>
      </div>
    </div>
  );
}
