import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div>
        Page Not Found !<Link to={"/"}>go to HOME PAGE</Link>
      </div>
    </>
  );
};

export default NotFoundPage;
