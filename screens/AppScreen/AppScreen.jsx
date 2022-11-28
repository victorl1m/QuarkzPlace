import "./AppScreen.css";
import "../../src/global.css";
import AppInfo from "../../components/AppInfo/AppInfo";
import BottomBar from "../../components/BottomBar/BottomBar";

export default function AppScreen() {
  return (
    <div className="appscreen-container">
      <AppInfo />
      <BottomBar />
    </div>
  );
}
