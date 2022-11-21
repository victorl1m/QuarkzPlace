import "./AppImage.css";
import "../../src/global.css";

export default function AppImage() {
  return (
    <div className="appinfo-right">
      <img
        src="./test.png"
        width={256}
        height={256}
        alt="appImage"
        className="appinfo-image"
      />
    </div>
  );
}
