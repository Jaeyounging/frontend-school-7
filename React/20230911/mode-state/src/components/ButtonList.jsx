import React from "react";
import Button from "./Button";
import "../css/ButtonList.css";

export default function ButtonList(props) {
  const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];

  return (
    <ul>
      {menus.map((item, index) => {
        return <Button key={index} mood={item} setCurrentMood={props.setCurrentMood} />;
      })}
    </ul>
  );
}
