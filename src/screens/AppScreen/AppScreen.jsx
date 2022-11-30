import "./AppScreen.css";
import Rating from "../../components/Rating/Rating.jsx";
import AppImage from "../../components/AppImage/AppImage.jsx";
import Update from "../../components/Update/Update";
import Security from "../../components/Security/Security";
import ExtraArea from "../../components/ExtraArea/ExtraArea";
import { useEffect, useState } from "react";

export default function AppScreen() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const appIcon = data[0].appIcon;
  const appName = data[0].appShortName;
  const appOwner = data[0].appOwner;

  console.log(data);

  if (!data) {
    return (
      <div className="div-loading">
        <button className="loading-button">
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
          <h1 className="loading-subText">
            Estou carregando todos os dados! 🏓
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="appscreen-container">
        <div className="appscreen-box">
          <div className="appTitle-area">
            <img className="appIcon" src={appIcon} alt="App Icon"></img>
            <div className="appTitle-box">
              <h1 className="appTitle">{appName}</h1>
              <h1 className="appTitle-sub highlight-text">{appOwner}</h1>
            </div>
          </div>
          <Rating />
          <div className="btn-area">
            <button className="download-btn">
              <h1 className="download-text">Download</h1>
            </button>
          </div>
          <div className="appImages-area">
            <AppImage />
          </div>
          <div className="AppBottom-area">
            <Update />
            <Security />
          </div>
        </div>
        <ExtraArea />
      </div>
    </>
  );
}
