import React, { useState, useEffect } from "react";
import Api from "../services/Api";

const Spots = () => {
  document.title = "Saint Jacques | Spots";

  const [spots, setSpots] = useState([]);

  const fetchSpots = () => {
    Api.get("/spots").then(({ data }) => {
      setSpots(data["hydra:member"]);
    });
  };

  useEffect(() => {
    fetchSpots();
  }, []);

  const renderSpots = () => {
    if (!spots.length) return <span>Chargement...</span>;

    return (
      <ul>
        {spots.map((spot, index) => (
          <li key={index}>
            <h3>{spot.name}</h3>
            <span>Longitude : {spot.longitude}</span>
            <span>Latitude : {spot.longitude}</span>
            <p>{spot.description}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1>Tous les spots</h1>
      {renderSpots()}
    </>
  );
};

export default Spots;
