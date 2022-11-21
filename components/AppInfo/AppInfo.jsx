import "./AppInfo.css";
import "../../src/global.css";
import { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import AppImage from "../AppImage/AppImage";

export default function AppInfo() {
  const [data, setData] = useState();

  const debugImage = "https://i.imgur.com/wXiw8uj.png";

  useEffect(() => {
    fetch("http://localhost:5000/apps")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="appinfo-container">
      {data?.map((info) => (
        <div className="appinfo-box">
          <div className="appinfo-info">
            <div className="appinfo-left">
              <h1 className="appinfo-title">{info.appShortName}</h1>
              <h1 className="highlight-text app-owner">{info.appOwner}</h1>
            </div>
            <div className="appinfo-right">
              <img
                src={debugImage}
                width={256}
                height={256}
                alt="appImage"
                className="appinfo-image"
              />
            </div>
          </div>
          <Rating />
          <div className="additional-area">
            <button className="download-btn">
              <h1 className="download-text">Download</h1>
            </button>
            <button className="wishlist-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#bbb"
              >
                <path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24zm-4.146 12.849l-1.854-.991-1.854.991.37-2.069-1.516-1.457 2.083-.288.917-1.891.917 1.892 2.083.287-1.516 1.457.37 2.069z" />
              </svg>
              <h1 className="wishlist-text">Add to wishlist</h1>
            </button>
          </div>
          <div className="image-area">
            <AppImage />
          </div>
        </div>
      ))}
    </div>
  );
}
