import "./App.css";

function App() {
  const date = new Date();

  return (
    <div className="App">
      <h1>안녕, 라이캣 1호!</h1>
      <h1>안녕, 라이캣 2호!</h1>

      <div className="date-container">
        <p className="year">년: {date.getFullYear()}</p>
        <p>
          월/일: {date.getMonth() + 1}월 {date.getDate()}일
        </p>
        <p>
          시간: {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초
        </p>
      </div>
    </div>
  );
}

export default App;
