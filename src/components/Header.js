import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-28 p-2 rounded-full shadow-lg"
        data-testid="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfdoTQAkfzU6jov5O7b0CfQIZM1fYWPv65XEbwEcRIZcaMZuPUcuV9hwX5Ixi0_1VD8&usqp=CAU"
        alt=""
      />
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { user } = useContext(userContext);
  const [title, settitle] = useState("Food Villa");
  const isOnline = useOnline();
  console.log(useState);
  const [login, setlogin] = useState(true);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <h1 className="text-center text-4xl font-bold py-10">Food Villa</h1>

      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/insta">InstaMart</Link>
          </li>
          <li  className="px-2 text-slate-600 text-xl">
            <Link data-testid="cartitem" to="/cart">Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ? "You are Online" : "you are offline"}</h1>
      <h2>{user.email}</h2>
      {login ? (
        <button onClick={() => setlogin(false)}>Login</button>
      ) : (
        <button onClick={() => setlogin(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
