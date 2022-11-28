import "./AppInfo.css";
import "../../src/global.css";
import { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import AppImage from "../AppImage/AppImage";
import Contact from "../Contact/Contact";
import NewFeatures from "../NewFeatures/NewFeatures";
import DataSecurity from "../DataSecurity/DataSecurity";
import AdditionalArea from "../AdditionalArea/AdditionalArea";

export default function AppInfo() {
  const [data, setData] = useState();

  function downloadLatest() {
    fetch(import.meta.env.VITE_GITHUB_API)
      .then((response) => response.json())
      .then((data) => {
        window.open(data.assets[0].browser_download_url);
        window.close();
      });
  }

  function reload() {
    window.location.reload();
  }

  // if (data?.compatibility === "android") {
  //   compatibilityStatus =
  //     "O aplicativo atualmente está disponível somente para dispositivos Android";
  // }

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="div-loading">
        <button className="loading-button" onClick={reload}>
          <svg
            width={24}
            height={24}
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z" />
          </svg>
        </button>
        <div className="loading-text">
          <h1 className="loading-text">Conectando-se</h1>
          <h1 className="loading-subText">Estou capturando seus dados! 🏓</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {data?.map((info) => (
        <div className="appinfo-box">
          <div className="appInfo-container">
            <div className="appInfo-left">
              <div className="appInfo-left-child">
                <h1 className="appName">{info.appShortName}</h1>
                <h1 className="highlight-text appPublisher">{info.appOwner}</h1>
                <Rating />
                <button onClick={downloadLatest} className="DownloadBtn">
                  <h1 className="DownloadBtn-text">Download</h1>
                </button>
              </div>
              <img
                src={info.appIcon}
                alt="appImage"
                className="appIconMobile"
              />
            </div>
            <div className="appData-area">
              <AppImage />
              <NewFeatures />
              <DataSecurity />
            </div>
          </div>
          <div className="additional-area">
            <AdditionalArea />
          </div>
        </div>
      ))}
    </div>
  );
}
