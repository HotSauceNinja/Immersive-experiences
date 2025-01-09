import { FaBan } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <FaBan />
      <h1>404 - Not Found!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        Go back to the <Link to="/">home page</Link>.
      </p>
    </>
  );
};

export default NotFoundPage;
