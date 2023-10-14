import Navbar from "../Navbar/Navbar";
import CustomButton from "../Buttons/CustomButton";
import tava from "../../assets/images/homepage/tava.png";
import cart_icon from "../../assets/icons/homepage/cart_icon.svg";
const Header = ({ component }: any) => {
  return (
    <div className=" sm:block  hidden bg-Gunmetal  w-full   ">
      <div className="flex flex-col  gap-y-4 ">
        <div className="py-4 px-20 flex justify-around items-center">
          <CustomButton variant="outlined" Label="Call - 987 654 321 " />
          <img src="/brand_logo.png" className="w-56" alt="brand_logo" />
          <div className="flex justify-between items-center gap-x-6">
            <img src={cart_icon} alt="cart_icon" />
            <CustomButton Label="Reservation" />
          </div>
        </div>

        <Navbar />
        <br />

        {component}
      </div>
    </div>
  );
};

export default Header;
