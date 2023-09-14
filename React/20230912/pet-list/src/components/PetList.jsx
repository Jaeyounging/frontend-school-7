import React from "react";
import PetItem from "./PetItem";

export default function PetList({ data }) {
  return (
    <ul>
      {data.map((item) => {
        return <PetItem key={item.id} name={item.name} species={item.species} age={item.age} />;
      })}
    </ul>
  );
}
