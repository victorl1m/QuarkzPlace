import "./ExtraArea.css";

export default function ExtraArea() {
  return (
    <div className="extraArea-container">
      <ul className="moreApps-box">
        <h1 className="moreApps-title">
          <a className="highlight-text">+ Apps</a> para você testar
        </h1>
        <li className="moreApps-item">
          <img
            className="moreApps-appIcon"
            src="https://i.imgur.com/ZJGw40a.png"
            alt="app-icon"
          ></img>
          <div className="moreApps-text">
            <h1 className="extra-appName">SIGO - Gestão de Obras.</h1>
            <h1 className="extra-ownerName">QuarkzPlace Ltd.</h1>
            <h1 className="extra-rating">0.0 ★</h1>
          </div>
        </li>
        <li className="moreApps-item">
          <img
            className="moreApps-appIcon"
            src="https://i.imgur.com/DTVWCbv.png"
            alt="app-icon"
          ></img>
          <div className="moreApps-text">
            <h1 className="extra-appName">PubNews - Notícias & Eventos</h1>
            <h1 className="extra-ownerName">QuarkzPlace Ltd.</h1>
            <h1 className="extra-rating">0.0 ★</h1>
          </div>
        </li>
      </ul>
    </div>
  );
}
