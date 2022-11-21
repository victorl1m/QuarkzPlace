import "./AppInfo.css";
import "../../src/global.css";
import { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import AppImage from "../AppImage/AppImage";
import Contact from "../Contact/Contact";

export default function AppInfo() {
  function downloadLatest() {
    fetch("https://api.github.com/repos/victorl1m/SIGO/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        window.open(data.assets[0].browser_download_url);
      });
  }

  const [data, setData] = useState();

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
              <Rating />
              <div className="additional-area">
                <div className="download-wishlist">
                  <button onClick={downloadLatest} className="download-btn">
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
                <div className="compatibility-area">
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#00b2cb"
                  >
                    <path d="M22.5 7c.828 0 1.5.672 1.5 1.5v14c0 .826-.671 1.5-1.5 1.5h-7c-.829 0-1.5-.675-1.5-1.5v-14c0-.827.673-1.5 1.5-1.5h7zm-8.937 17h-5.563c.279-2.892 1.559-2.657 2.108-4h2.892v2.5c0 .524.182 1.175.563 1.5zm-6.563 0h-4c-.177-1.993-.667-2.729-1.413-3.408-.976-.887-1.587-2.16-1.587-3.574 0-1.413.611-2.686 1.585-3.572.748-.68 1.246-1.476 1.415-3.446h4c.202 1.97.583 2.766 1.332 3.446.833.759 1.397 1.8 1.544 2.971h.624v1.166h-.618c-.14 1.186-.709 2.242-1.552 3.009-.747.679-1.176 1.391-1.33 3.408zm12-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm-14-2.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5zm18-.5v-10.024h-8v10.024h8zm-16-2h-3v-3h1v2h2v1zm12.5-10h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1c.275 0 .5-.224.5-.5s-.225-.5-.5-.5zm-14.5 1h-2v-7c0-1.104.896-2 2-2h15c1.104 0 2 .896 2 2v4h-2v-3h-15v6z" />
                  </svg>
                  <h1 className="compatiblity-text">{info.compatibility}</h1>
                </div>
              </div>
            </div>
            <div className="appinfo-right">
              <img
                src={info.appIcon}
                alt="appImage"
                className="appinfo-image"
              />
            </div>
          </div>
          <div className="another-area">
            <AppImage />
            <Contact />
          </div>
        </div>
      ))}
    </div>
  );
}
