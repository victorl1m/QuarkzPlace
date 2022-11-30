import "./Rating.css";
import { useEffect, useState } from "react";

export default function Rating() {
  const [data, setData] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_GITHUB_API)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const downloadCount = data?.assets[0].download_count;

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((info) => setInfo(info));
  }, []);

  const category = "Arquitetura";

  return (
    <div className="rating-container">
      <ul className="rating-type">
        <li className="rating-box">
          <h1 className="rating-title">0.0 ★</h1>
          <h1 className="rating-subTitle">0 Avaliações</h1>
        </li>
        <li className="rating-box">
          <h1 className="rating-title">{downloadCount}+</h1>
          <h1 className="rating-subTitle">Downloads</h1>
        </li>
        <li className="rating-box">
          <h1 className="rating-title">ⓘ</h1>
          <h1 className="rating-subTitle">{category}</h1>
        </li>
      </ul>
    </div>
  );
}
