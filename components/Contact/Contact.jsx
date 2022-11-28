import { useEffect, useState } from "react";
import "../../src/global.css";
import "./Contact.css";

export default function Contact() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="contact-container">
      {data?.map((info) => (
        <div className="contact-box">
          <h1 className="contact-title">
            <a className="highlight-text bold">✆ Contato</a> do desenvolvedor
          </h1>
          <ul className="contact-types">
            <li key="site" className="contact-type">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 18c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-16 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm8-16c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm3.873 15.655l-2.873-2.404v-3.341c-.326.055-.658.09-1 .09s-.674-.035-1-.09v3.341l-2.873 2.404c.484.46.892 1 1.201 1.598l2.672-2.253 2.672 2.253c.309-.598.717-1.137 1.201-1.598z" />
              </svg>
              <div className="contact-icon">
                <h1 className="contact-text">Site</h1>
                <h1 className="contact-subtext">{info.site}</h1>
              </div>
              <button className="contact-arrow">
                <a href="https://quarkzplace.one">
                  <svg
                    width={24}
                    height={24}
                    fill="#00b2cb"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
                  </svg>
                </a>
              </button>
            </li>
            <li key="email" className="contact-type">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
              <div className="contact-icon">
                <h1 className="contact-text">E-mail</h1>
                <h1 className="contact-subtext">{info.email}</h1>
              </div>
              <button className="contact-arrow">
                <a href="mailto:support@quarkzplace.one">
                  <svg
                    width={24}
                    height={24}
                    fill="#00b2cb"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
                  </svg>
                </a>
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
