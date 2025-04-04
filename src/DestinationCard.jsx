import React from "react";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "300px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden"
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "16px" }}>
        <h2 style={{ margin: "0 0 8px" }}>{name}</h2>
        <h4 style={{ margin: "0 0 8px", color: "#555" }}>{location}</h4>
        <p style={{ margin: "0 0 16px", color: "#777" }}>{description}</p>
        <p style={{ fontWeight: "bold", fontSize: "18px" }}>{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;