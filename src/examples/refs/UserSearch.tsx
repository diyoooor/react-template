import { useEffect, useRef, useState } from "react";

const users = [
  { name: "Max", age: 26 },
  { name: "Xam", age: 19 },
  { name: "Diyoor", age: 30 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search</h1>
      <input
        type={"text"}
        value={name}
        ref={inputRef}
        onChange={(e) => {
          if (e.target.value.trim().length !== 0) {
            setName(e.target.value);
          } else {
            setName("");
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") onClick();
        }}
      />
      <button onClick={onClick}>Find User</button>

      <h3>Search Result</h3>
      <div>
        Name : {user && user?.name} <br />
        Age : {user && user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
