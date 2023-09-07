import React from "react";

const FragmentRender = () => {
  const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  return (
    <dl>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default FragmentRender;
