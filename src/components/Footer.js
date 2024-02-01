import React from "react";
import store from "../../assets/pngegg.png";
function Footer() {
  return (
    <div className=" text-white">
      <div className="py-4 px-6 bg-slate-300 text-slate-700 flex justify-between text-center">
        <p className="tfont-medium mb-2 ml-20 text-2xl font-semibold mt-5">
          For better experience, download the FoodHub app now
        </p>
        <div className="flex space-x-4 mr-40 bg-transparent">
          <button className="bg-white text-gray-900 py-2  bg-transparent scale-110">
            <img
              src={store}
              className="w-28 h-22 object-cover bg-transparent"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="py-4 px-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-900">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfdoTQAkfzU6jov5O7b0CfQIZM1fYWPv65XEbwEcRIZcaMZuPUcuV9hwX5Ixi0_1VD8&usqp=CAU"
            alt="FoodHub logo"
            className="rounded-full shadow-lg w-24"
          />
          <p className="text-sm mt-2">© 2023 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">Company</h4>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FoodHub Instamart
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">Contact us</h4>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                Help & Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Partner with us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Ride with us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">We deliver to:</h4>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                Bangalore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Gurgaon
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Hyderabad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                View more cities
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
