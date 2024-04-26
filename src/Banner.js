// components/Banner.js

import React from "react";
import sharp from "./sharp.jpg";

const Banner = () => {
  return (
    <div className="container banner">
      <nav>
        <div>
          <h1>SpaceX</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <button className="btn">Rockets</button>
      </nav>

      {/* Your banner content goes here */}
      <div className="home">
        <div>
          <h1>Welcome to SpaceX</h1>
          <p>
            Establishing a multiplanetary existence for humanity requires
            significant advancements. We need to focus on efficient and reusable
            spacecraft for travel. SpaceX is working on a space craft that will
            take us to Mars.
          </p>
          <div className="buttons">
            <button className="btn button2">Learn More</button>
            <button className="btn button2">Contact Us</button>
          </div>
        </div>
        <div className="homeimg">
          <img className="img" src={sharp} alt="space" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
