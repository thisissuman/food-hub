import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import { BadgePercent } from "lucide-react";
import { LifeBuoy } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Salad } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import foodtexture from "../../assets/Loginfood.jpg";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-20 w-20 p-2 rounded-full shadow-lg ml-5 mt-5"
        data-testid="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfdoTQAkfzU6jov5O7b0CfQIZM1fYWPv65XEbwEcRIZcaMZuPUcuV9hwX5Ixi0_1VD8&usqp=CAU"
        alt=""
      />
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const {username,email} = useContext(userContext);
  // console.log(user);
  const [title, settitle] = useState("Food Villa");
  const isOnline = useOnline();

  const [login, setlogin] = useState(true);



  useEffect(() => {
    console.log(cartItems.length);
  }, [cartItems.length])
  
  return (
    <div
      className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50 m-0 p-0 h-22 "
      style={{
        backgroundImage: `url(${foodtexture})`,
        backgroundSize: "cover", // Ensure the image covers the entire div
        backgroundPosition: "center", // Center the image
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        // Add a more transparent white overlay
      }}
    >
      <div className="flex justify-start">
        <Title />
        <div className="pt-10 flex gap-3 px-10">
          <span className="text-center font-bold underline font-custom ">
            Other
          </span>
          <span className=" text-slate-500 font-custom">
            Backside of rammandir, 7RGR+VP7,...
          </span>
          <ChevronDown className="text-orange-500" />
        </div>
      </div>

      <div className="nav-items flex justify-end pr-10">
        <h2>{isOnline ? '🟢' : '🔴'}</h2>
        <ul className="flex py-10 gap-5">
          <li className="px-2  font-custom flex justify-center items-center">
            <Link
              to="/Offers"
              className=" flex justify-center items-center  gap-2"
            >
              <BadgePercent /> Offers{" "}
            </Link>
          </li>
          <li className="px-2  font-custom  flex justify-center items-center">
            <Link
              to="/Help"
              className=" flex justify-center items-center gap-2"
            >
              <LifeBuoy /> Help
            </Link>
          </li>
          <li className="px-2  font-custom ">
            <Link
              to="/insta"
              className=" flex justify-center items-center gap-2"
            >
              <Salad />
              InstaMart
            </Link>
          </li>
          <li className="px-2  font-custom flex justify-center items-center">
            <Link
              to="/login"
              className=" flex justify-center items-center  gap-2"
            >
              <CircleUserRound />
              {login ? (
                <button onClick={() => setlogin(false)}>Login</button>
              ) : (
                <button onClick={() => setlogin(true)}>Logout</button>
              )}
            </Link>
          </li>
          <li className={`px-2 text-slate-600 text-xl  font-custom bg-amber-500 rounded-md ${cartItems.length > 0 ? 'scale-110 animate-bounce ' : ""}`}>
            <Link
              data-testid="cartitem"
              to="/cart"
              className=" border-spacing-5 to-black"
            >
              Cart-{cartItems.length}
            </Link>
          </li>
         {/*  <p>{username}</p>
          <p>{email}</p> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
