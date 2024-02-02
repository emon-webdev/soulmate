import Image from "next/image";
import logo from "../assets/images/logo/main_logo.png";
const loading = () => {
  return (
    <div className="main">
      <div id="heart" className="heart">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default loading;
