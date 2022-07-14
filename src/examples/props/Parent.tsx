import { ChildAsFC } from "./Chlid";

const Parent = () => {
  return (
    <ChildAsFC
      onClick={() => {
        console.log("CLICKED !!");
      }}
      color="red"
    >
      afjiawjfi
    </ChildAsFC>
  );
};

export default Parent;
