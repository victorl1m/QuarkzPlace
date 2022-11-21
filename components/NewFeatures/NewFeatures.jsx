import { useEffect, useState } from "react";
import "../../src/global.css";
import "./NewFeatures.css";

export default function NewFeatures() {
  return (
    <div className="newfeature-container">
      <div>
        <h1 className="newfeature-title">What's new?</h1>
        <ul className="newfeature-box">
          <h1 className="newfeature-update">
            - too much fixes and new improvements!
          </h1>
        </ul>
      </div>
    </div>
  );
}
