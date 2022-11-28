import "../../src/global.css";
import "./AdditionalArea.css";

export default function AdditionalArea() {
  return (
    <div className="additional-container">
      <ul className="additional-box">
        <li className="additional-title">
          <h1 className="additional-text">
            <a className="highlight-text bold">+ Apps</a> para você testar
          </h1>
        </li>
        <li className="additional-item">
          <img
            className="additional-appIcon"
            src="https://i.imgur.com/ZJGw40a.png"
            alt="app-icon"
          ></img>
          <div className="additional-app">
            <a className="additional-appName">GECOM - Gestão de Telecom.</a>
            <h1 className="additional-appText">QuarkzPlace Ltd.</h1>
            <h1 className="additional-appRating">0.0 ★</h1>
          </div>
        </li>
        <li className="additional-item">
          <img
            className="additional-appIcon"
            src="https://i.imgur.com/W51RaQU.png"
            alt="app-icon"
          ></img>
          <div className="additional-app">
            <a className="additional-appName">PubNews - Notícias & Eventos</a>
            <h1 className="additional-appText">QuarkzPlace Ltd.</h1>
            <h1 className="additional-appRating">0.0 ★</h1>
          </div>
        </li>
      </ul>
    </div>
  );
}
