import { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  const user = [
    { id: "jaehyun@weniv.com", pw: "1234" },
    { id: "dlwodud5061@weniv.com", pw: "4321@" },
  ];

  // 로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);

  return login ? <Homepage /> : <Login userInfo={user} setLogin={setLogin} />;
}
export default App;
