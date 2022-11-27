import "./AppImage.css";
import "../../src/global.css";
import { useState, useEffect } from "react";
export default function AppImage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="appimage-container">
      {data?.map((info) => (
        <div className="appimage-box">
          <div>
            <img
              src={info.appImage1}
              height={300}
              alt="appImage"
              className="app-image img1"
            />
          </div>
          <div>
            <img
              src={info.appImage2}
              height={300}
              alt="appImage"
              className="app-image img2"
            />
          </div>
          <div>
            <img
              src={info.appImage3}
              height={300}
              alt="appImage"
              className="app-image img3"
            />
          </div>
          <div>
            <img
              src={info.appImage4}
              height={300}
              alt="appImage"
              className="app-image img4"
            />
          </div>
          <div>
            <img
              src={info.appImage5}
              height={300}
              alt="appImage"
              className="app-image img5"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
