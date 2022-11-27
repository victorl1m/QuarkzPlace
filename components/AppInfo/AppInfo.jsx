import "./AppInfo.css";
import "../../src/global.css";
import { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import AppImage from "../AppImage/AppImage";
import Contact from "../Contact/Contact";
import NewFeatures from "../NewFeatures/NewFeatures";
import DataSecurity from "../DataSecurity/DataSecurity";

export default function AppInfo() {
  function downloadLatest() {
    fetch("https://api.github.com/repos/victorl1m/SIGO/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        window.open(data.assets[0].browser_download_url);
        window.close();
      });
  }

  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://APIQuarkzPlace.vitaoks1.repl.co")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="div-loading">
        <h1 className="loading-text">Carregando os dados...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {data?.map((info) => (
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
            <img src={info.appIcon} alt="appImage" className="appIconMobile" />
          </div>
          <div className="appData-area">
            <AppImage />
            <NewFeatures />
            <DataSecurity />
          </div>
        </div>
      ))}
    </div>
  );
}
