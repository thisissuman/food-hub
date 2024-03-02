import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-25 w-auto" src="https://cdn.dribbble.com/users/1514670/screenshots/3296832/media/87bdfe37759120c9bbdb44d9f5258b2c.gif" alt="Dragon Game"/>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            The status is: {status} - {statusText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
