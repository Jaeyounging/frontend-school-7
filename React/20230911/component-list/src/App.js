import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

function App() {
  return (
    <div>
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
      <ColorText color="#87CEEB" />
      <ColorText color="#FFFF00" />
      <ColorText color="#90EE90" />
    </div>
  );
}
export default App;
