import { useState } from "react";
import ButtonList from "./components/ButtonList";
import DisplayMood from "./components/DisplayMood";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1>오늘의 기분을 선택해 주세요✅</h1>
      <div>
        <ButtonList setCurrentMood={setCurrentMood} />
        <DisplayMood mood={currentMood} />
      </div>
    </div>
  );
}
export default App;
