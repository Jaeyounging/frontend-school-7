import { useState } from "react";

function Resume(props) {
  const [like, setLike] = useState("");

  function clickLike() {
    like === "" ? setLike("like") : setLike("");
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>개리 자기소개서</h3>
      <h3>안녕하세요</h3>
      <p>취미 : {props.hobby}</p>
      <p>좋아하는 음식 : {props.food}</p>
      <p>좋아하는 색 : {props.color}</p>
      <button onClick={clickLike}>like</button>
      <span>{like}</span>
    </div>
  );
}

export default Resume;
