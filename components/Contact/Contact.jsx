import { useEffect, useState } from "react";
import "../../src/global.css";
import "./Contact.css";

export default function Contact() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://apiPubnews.vitaoks1.repl.co")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="contact-container">
      {data?.map((info) => (
        <div>
          <h1 className="contact-title">Developer Contact</h1>
          <ul className="contact-types">
            <li className="contact-type">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 18c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-16 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm8-16c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm3.873 15.655l-2.873-2.404v-3.341c-.326.055-.658.09-1 .09s-.674-.035-1-.09v3.341l-2.873 2.404c.484.46.892 1 1.201 1.598l2.672-2.253 2.672 2.253c.309-.598.717-1.137 1.201-1.598z" />
                </svg>
                <h1 className="contact-text">Site</h1>
              </div>
              <h1 className="contact-subtext">{info.site}</h1>
            </li>
            <li className="contact-type">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                <h1 className="contact-text">E-mail</h1>
              </div>
              <h1 className="contact-subtext">{info.email}</h1>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
