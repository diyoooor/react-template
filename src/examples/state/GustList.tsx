import { useState } from "react";

const GustList: React.FC = () => {
  const [name, setName] = useState("");
  const [gusts, setGusts] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGusts([...gusts, name]);
  };

  return (
    <div>
      <h1>Gust List</h1>

      <ul>
        {gusts.map((r, i) => {
          return <li key={i}>{r}</li>;
        })}
      </ul>
      <input
        type={"text"}
        value={name}
        onChange={(e) => {
          if (e.target.value.trim().length !== 0) {
            setName(e.target.value);
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") onClick();
        }}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default GustList;
