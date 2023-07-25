import React from "react";
import CustomHeading from "../Common/CustomHeading";
import open247 from "../../assets/icons/homepage/open247.svg";
const Services = () => {
  return (
    <div className="bg-Gunmetal w-full py-20">
      <div className=" gap-8 flex-col sm:flex-row flex items-center justify-center m-auto w-full sm:w-8/12">
        <div className="text-white w-full p-4 sm:w-2/5">
          <CustomHeading text="What we offer" />

          <br />
          <h5 className="sm:text-left text-center">Our Great Services</h5>
          <br />
          <p className="sm:text-left text-center">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English. Opened 24/7 Special
            Menus Home Delivery
          </p>
        </div>
        {[1, 2, 3].map((service) => {
          return (
            <div className="p-4 bg-Onyx w-[211px] h-[211px]">
              <div className="flex flex-col items-center justify-center bg-Gunmetal h-full">
                <img src={open247} alt="Open247icon" />
                <p className="text-white">Opened 24/7</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
