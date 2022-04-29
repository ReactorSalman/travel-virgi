import { useEffect, useState } from "react";
import "./Carousel.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios';

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [durationInput, setDurationInput] = useState(0);
  const [rotation, setRotation] = useState("");


  useEffect(() => {
    const fetchImages = () => {
        const url = "https://evening-ridge-73218.herokuapp.com/https://www.virginholidays.co.uk/d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/748545/748545-1-results_carousel.jpg?version=26";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','*');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    
        axios.get(url, {headers: headers})
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
        });
    };
    fetchImages();
  }, []);

  const length = images.length;

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleOnClick = () => {
    if (rotation === "forward" && durationInput !== undefined) {
      setInterval(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, durationInput);
      setRotation("");
      setDurationInput(0);
      console.log(durationInput);
    }

    if (rotation === "reverse" && durationInput !== undefined) {
      setInterval(() => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      }, durationInput);
      setRotation("");
      setDurationInput(0);
      console.log(durationInput);
    }
  };

  const handleOnChange = (e) => {
    const input = e.target.value;
    if (e.target.id === "durationId") {
      setDurationInput(input);
    }
    if (e.target.id === "forwardId") {
      setRotation(input);
    }
    if (e.target.id === "reverseId") {
      setRotation(input);
    }
  };

  return (
    <div>
      {/* <section className="text-section">
        <span>Duration: </span>
        <input
          id="durationId"
          placeholder="duration"
          onChange={handleOnChange}
        />
        <div className="setMargins">
          <span>Direction: </span>
          <span>Forward</span>
          <input
            className="radio-style"
            type="radio"
            value="forward"
            id="forwardId"
            checked={rotation === "forward"}
            onChange={handleOnChange}
          />
          <span>Reverse</span>
          <input
            className="radio-style"
            type="radio"
            value="reverse"
            id="reverseId"
            checked={rotation === "reverse"}
            onChange={handleOnChange}
          />
        </div>
        <button className="button-style" onClick={handleOnClick}>
          Submit
        </button>
      </section> */}
      <section className="slide-section">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {images.map((slide, index) => {
          return (
            // <div className="carousel" data-interval={1000}>
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide} alt="mac images" className="image-view" />
              )}
            </div>
            // </div>
          );
        })}
      </section>
    </div>
  );
}
