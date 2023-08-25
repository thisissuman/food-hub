const Title = () => {
    return (
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfdoTQAkfzU6jov5O7b0CfQIZM1fYWPv65XEbwEcRIZcaMZuPUcuV9hwX5Ixi0_1VD8&usqp=CAU"
        alt=""
      />
    );
  };

  const Header = () => (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );

export default Header;