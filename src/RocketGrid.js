import React from "react";

const RocketGrid = ({ rocketData }) => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rocketData.map((rocket) => (
            <div key={rocket.id} className="card">
              <img
                className="images"
                src={rocket.flickr_images[0]}
                alt="Rocket images"
              />
              <h2 className="card-title">{rocket.name}</h2>
              <p className="small-desc">{rocket.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RocketGrid;
