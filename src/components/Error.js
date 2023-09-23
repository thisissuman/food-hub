import { useRouteError } from "react-router-dom";
const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>Opps something went wrong</h1>
      <h1>
        The status is : {status} : {statusText}
      </h1>
    </div>
  );
};

export default Error;
