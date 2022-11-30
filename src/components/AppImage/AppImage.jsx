import "./AppImage.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AppImage() {
  const [data, setData] = useState();
  const [widthCarousel, setWidthCarousel] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const carousel = useRef();

  useEffect(() => {
    setTimeout(() => {
      setWidthCarousel(
        carousel.current?.scrollWidth - carousel.current?.offsetWidth
      );
    }, 700);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      {data?.map((info) => (
        <motion.div
          key={info.id}
          className="appimage-box"
          drag="x"
          dragConstraints={{ right: 0, left: -widthCarousel }}
        >
          <div>
            <img
              src={info.appImage1}
              height={300}
              alt="appImage"
              className="app-image img1"
            />
          </div>
          <div>
            <img
              src={info.appImage2}
              height={300}
              alt="appImage"
              className="app-image img2"
            />
          </div>
          <div>
            <img
              src={info.appImage3}
              height={300}
              alt="appImage"
              className="app-image img3"
            />
          </div>
          <div>
            <img
              src={info.appImage4}
              height={300}
              alt="appImage"
              className="app-image img4"
            />
          </div>
          <div>
            <img
              src={info.appImage5}
              height={300}
              alt="appImage"
              className="app-image img5"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
