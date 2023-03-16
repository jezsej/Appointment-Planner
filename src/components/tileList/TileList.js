import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
      { data.map((item, index)=> <Tile key={index} item={item} />) }
    </div>
  );
};
