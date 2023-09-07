import "./ListRender.css";

const ListRender = () => {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <ul className="list-container">
      {list.map((item) => {
        return (
          <li className={item.visited ? "visited" : ""} key={item.no}>
            {item.area}
          </li>
        );
      })}
    </ul>
  );
};

export default ListRender;
