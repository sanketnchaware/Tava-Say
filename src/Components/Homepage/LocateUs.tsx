import React from "react";
// import locate_us from "../../assets/images/homepage/locate_us.svg"
import address from "../../assets/icons/homepage/address.svg";
import reserve from "../../assets/icons/homepage/reserve.svg";
import timing from "../../assets/icons/homepage/timing.svg";
const LocateUs = () => {
  return (
    <div className="bg-FloralWhite sm:h-screen   justify-center  gap-y-20 sm:gap-y-24 sm:px-44 py-10 sm:py-20 flex flex-col  items-center  ">
      <div className="grid   sm:grid-cols-3 grid-cols-1 gap-y-4  sm:gap-x-4 justify-between items-center">
        {React.Children.toArray(
          [
            {
              icon: address,
              title: "Locate Us   ",
              content:
                "G21, The Brigade Arcade, Metropolis, Mahadevapura, Whitefield, Bangalore",
            },
            {
              icon: timing,
              title: "Open Hours",
              content: "Mon. to Fri.(10.00 am to 10.00 pm)",
            },
            {
              icon: reserve,
              title: "Reserve Table",
              content: "tavasay@gmail.com",
            },
          ].map((item) => {
            return (
              <div className="flex gap-x-4 sm:border-r border-slate-800">
                <div className="w-[20%] flex items-center justify-center">
                  <img className="w-full" src={item?.icon} alt="" />
                </div>
                <div className="w-[70%] m-auto">
                  <h6>{item?.title}</h6>
                  <p> {item?.content}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-10 sm:gap-20">
        <img
          src="https://10619-2.s.cdn12.com/rests/original/102_514679913.jpg"
          alt="locate_us"
          className="w-full sm:w-1/2 rounded-none sm:rounded-xl"
        />
        <div className="flex flex-col gap-y-8 sm:gap-y-8">
          <div>
            <h5>The Story</h5>
            <p>
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere',
              makinlook like readable English. Many desktop publishing packages.
            </p>
          </div>
          <div className="flex sm:gap-8  gap-4">
            <div>
              <h5>2021</h5>
              <p>
                Lorem Ipsum is that it has a more-or-less normal Content content
              </p>
            </div>
            <div>
              <h5>2023</h5>
              <p>
                Lorem Ipsum is that it has a more-or-less normal Content content
              </p>
            </div>
          </div>
          <div>
            <h5>Contact Us</h5>
            <p>+91 9611959312</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
