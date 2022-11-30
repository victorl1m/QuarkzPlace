import { useEffect, useState } from "react";
import "./Update.css";

export default function Update() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(import.meta.env.VITE_GITHUB_API)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const latestInfo = data?.body
    .replace(/(\r\n|\n|\r)/gm, "\n")
    .replaceAll("**", "");

  const releaseVersion = data?.tag_name;

  return (
    <div className="update-container">
      <h1 className="update-title">O que há de novo?</h1>
      <div className="update-box">
        <h1 className="release-text">{releaseVersion}</h1>
        <p className="update-desc">{latestInfo}</p>
      </div>
    </div>
  );
}
