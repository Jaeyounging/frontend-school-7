import React, { useState } from "react";

export default function Login({ userInfo, setLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginInput = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  const handlePwInput = (event) => {
    setPw(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    if (id === "") {
      alert("아이디를 입력해 주세요.");
    } else if (pw === "") {
      alert("비밀번호를 입력해 주세요.");
    }

    userInfo.forEach((item) => {
      if (id === item.id && pw === item.pw) {
        setLogin(true);
        console.log(`아이디 : ${id}, 비밀번호 : ${pw}`);
      }
    });

    event.preventDefault(); // 폼의 기본 제출 동작(새로고침)을 막고 폼 데이터를 수집하거나 클라이언트 측에서 처리
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput} />
      </label>
      <label>
        비밀번호 : <input type="password" onChange={handlePwInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
