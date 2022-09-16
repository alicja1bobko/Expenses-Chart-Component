import logo from "../images/logo.svg";

const Balance = () => {
  return (
    <div className="balance-container">
      <p className="mb-2">My balance</p>
      <span className="font-bold balance">$921.48</span>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Balance;
