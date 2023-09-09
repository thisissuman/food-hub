import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfdoTQAkfzU6jov5O7b0CfQIZM1fYWPv65XEbwEcRIZcaMZuPUcuV9hwX5Ixi0_1VD8&usqp=CAU"
      alt=""
    />
  );
};

const Header = () => {
  const [title, settitle] = useState("Food Villa");
  console.log(useState);
  const [login, setlogin] = useState(true);
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button
        onClick={() => {
          settitle("Wood villa");
        }}
      >
        Change titile
      </button>
      {login ? (
        <button onClick={() => setlogin(false)}>Login</button>
      ) : (
        <button onClick={() => setlogin(true)}>Logout</button>
      )}

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
