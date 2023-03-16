import React from "react";

export const Tile = ({ item }) => {
  return (
    <div className="tile-container">
      {Object.values(item).map((value, index) => {
        if (index === 0) {
     return     <p key={index} className="tile-title">
            {value}
          </p>;
        }

     return   <p  key={index} className="tile">{value}</p>;
      })}
    </div>
  );
};
