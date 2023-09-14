import React, { useState } from "react";

export default function AddPetForm({ setPets }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 함수형 업데이트
    setPets((prev) => {
      setName("");
      setSpecies("");
      setAge(0);
      // return prev.push({ name, speceis, age, id: Date.now() });
      // return prev.concat({ name, speceis, age, id: Date.now() });
      return [...prev, { name, species, age, id: Date.now() }];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새로운 애완동물을 추가해주세요.</legend>

        <label>
          이름 :
          <input
            id="Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          종류 :
          <input
            id="Species"
            type="text"
            value={species}
            onChange={(event) => setSpecies(event.target.value)}
          />
        </label>
        <label>
          나이 :
          <input
            id="Age"
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <button>추가하기</button>
      </fieldset>
    </form>
  );
}
