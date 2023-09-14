import React from "react";
import "../css/PetItem.css";

export default function PetItem({ name, species, age }) {
  return (
    <li className="container">
      <img src="" alt="" />
      <strong>{name}</strong>
      <span>{species}</span>
      <span>{age}</span>
    </li>
  );
}
