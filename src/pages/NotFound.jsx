import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-gray-500 mt-2">Page not found</p>

      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;