import "./AppInfo.css";
import "../../src/global.css";
import { useEffect, useState } from "react";

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
              <h1 className="appinfo-title">{info.appLongName}</h1>
              <h1 className="highlight-text app-owner">{info.appOwner}</h1>
              <ul className="appinfo-rating">
                <li className="rating-child">
                  <p className="app-rating">
                    0,0
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#00b2cb"
                    >
                      <path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" />
                    </svg>
                  </p>
                  <h1 className="rating-text">Avaliações</h1>
                </li>
              </ul>
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
          <button className="download-btn">
            <svg
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6.864 3.424c.502-.301 1.136.063 1.136.642 0 .264-.138.509-.365.644-2.476 1.486-4.135 4.197-4.135 7.292 0 4.691 3.808 8.498 8.498 8.498s8.497-3.807 8.497-8.498c0-3.093-1.656-5.803-4.131-7.289-.225-.136-.364-.38-.364-.644 0-.582.635-.943 1.137-.642 2.91 1.748 4.858 4.936 4.858 8.575 0 5.519-4.479 9.998-9.997 9.998s-9.998-4.479-9.998-9.998c0-3.641 1.951-6.83 4.864-8.578zm7.136 12.576c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm-3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm-3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm-.305-6.488s2.025 2.021 3.779 3.775c.147.146.339.219.53.219.192 0 .384-.073.531-.219 1.753-1.753 3.779-3.776 3.779-3.776.145-.145.217-.336.217-.526 0-.192-.074-.384-.221-.531-.292-.292-.766-.294-1.056-.004l-2.5 2.5v-8.2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v8.2l-2.498-2.499c-.289-.289-.762-.286-1.054.006-.147.147-.221.339-.222.531 0 .19.071.38.215.524z" />
            </svg>
            <h1 className="download-text">Instalar neste dispositivo</h1>
          </button>
        </div>
      ))}
    </div>
  );
}
