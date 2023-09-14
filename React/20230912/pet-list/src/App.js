import { useState } from "react";
import AddPetForm from "./components/AddPetForm";
import PetList from "./components/PetList";

function App() {
  const [pets, setPets] = useState([
    { name: "벨라", species: "고양이", age: 5, id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ]);

  return (
    <div>
      <h1>애완동물 정보 리스트</h1>
      <AddPetForm setPets={setPets} />
      <PetList data={pets} />
    </div>
  );
}
export default App;
