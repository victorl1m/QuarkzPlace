import { useEffect, useState } from "react";
import "../../src/global.css";
import "./NewFeatures.css";

export default function NewFeatures() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.github.com/repos/victorl1m/SIGO/releases/latest")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const latestInfo = data?.body
    .replace(/(\r\n|\n|\r)/gm, "\n")
    .replaceAll("**", "");

  return (
    <div className="newfeature-container">
      <div>
        <h1 className="newfeature-title">O QUE HÁ DE NOVO?</h1>
        <ul className="newfeature-box">
          <p className="newfeature-update">{latestInfo}</p>
        </ul>
      </div>
    </div>
  );
}
