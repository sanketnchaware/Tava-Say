import CustomButton from "../Buttons/CustomButton";
import hero from "../../assets/images/homepage/hero.svg";
const HeroSection = () => {
  return (
    <div className="  bg-Gunmetal  flex gap-10 justify-center  items-center w-full sm:w-9/12 m-auto">
      <div className="py-9 sm:px-0 px-4">
        <h3 className="text-FloralWhite ">
          Welcome to
          <br className="sm:hidden " />
          <span className=" text-Fawn "> Tava Say ! </span>
        </h3>
        <br />
        <p className="text-base sm:text-xl text-FloralWhite">
          " Step into a realm of North Indian culinary bliss, where
          centuries-old traditions blend harmoniously with modern flavors,
          tantalizing your taste buds with every savory morsel. "
        </p>
        <br /> <CustomButton variant="outlined" Label="View Menu" />
      </div>
      <div className="relative w-8/12 sm:block hidden">
        <img
          className=" w-full rounded-xl brightness-75 "
          src={hero}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;
