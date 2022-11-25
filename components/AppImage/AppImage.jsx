import "./AppImage.css";
import "../../src/global.css";
import { useState, useEffect } from "react";

export default function AppImage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://APIQuarkzPlace.vitaoks1.repl.co")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="appimage-container">
      {data?.map((info) => (
        <div className="appimage-box">
          <img
            src={info.appImage1}
            height={300}
            alt="appImage"
            className="app-image"
          />
          <img
            src={info.appImage2}
            height={300}
            alt="appImage"
            className="app-image"
          />
        </div>
      ))}
    </div>
  );
}
