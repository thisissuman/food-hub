import React from 'react';
import LoginPic from '../../assets/loginpic.jpg';
import InLogin from '../../assets/Loginfood.jpg';

const LoginForm = () => {
  return (
    <div style={{ backgroundImage: `url(${LoginPic})`, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="bg-orange-100 p-6 rounded shadow-md w-96" style={{ 
      backgroundImage: `url(${InLogin})`, 
      backgroundSize: 'cover', // Ensure the image covers the entire div
      backgroundPosition: 'center', // Center the image
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      border: '5px solid black', // Add a black border
  boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.75)' // Add a more transparent white overlay
    }}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-4">More than 15,000 recipes from around the world!</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Enter Email Address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
