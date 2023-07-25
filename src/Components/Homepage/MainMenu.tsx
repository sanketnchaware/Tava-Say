import React from "react";
import CustomButton from "../Buttons/CustomButton";

const MainMenu = () => {
  return (
    <div className="w-full sm:w-9/12 m-auto flex sm:flex-row flex-col justify-between gap-y-20  my-10 sm:my-20 ">
      <div className=" w-full sm:w-4/12 flex flex-col gap-y-4">
        <h6>Try Our Special Offers</h6>
        <p>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making it look
          like readable English.{" "}
        </p>

        <img
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMHZlcnRpY2VsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <CustomButton variant="yellowoutlined" Label="View Menu" />
      </div>
      <div className="w-full sm:w-7/12 flex flex-col gap-y-10">
        {/* Starters */}
        <div>
          <h5>Starters</h5>
          <br />
          <div className="flex flex-col gap-8">
            {React.Children.toArray(
              [1, 2, 3, 4].map((item) => {
                return (
                  <div className="flex justify-between gap-2">
                    <img
                      className="m-auto w-28 h-24 sm:w-20 sm:h-20 rounded-xl sm:rounded-full"
                      src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                    <div className="flex flex-col justify-center">
                      <p>Raw Scallops from Erquy</p>
                      <p>Candied Jerusalem artichokes, truffle</p>
                    </div>
                    <div className="hidden sm:flex flex-col py-5 justify-end w-4/12">
                      <p className="broder border-dashed border-b border-slate-500"></p>
                    </div>
                    <p className="flex items-end sm:m-0 m-auto   py-0 sm:py-4">
                      $40
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* main Dish */}
        <div>
          <h5>Main Dish</h5>
          <br />
          <div className="flex flex-col gap-8">
            {React.Children.toArray(
              [1, 2, 3, 4].map((item) => {
                return (
                  <div className="flex justify-between gap-2">
                    <img
                      className="m-auto w-28 h-24 sm:w-20 sm:h-20 rounded-xl sm:rounded-full"
                      src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                    <div className="flex flex-col justify-center">
                      <p>Raw Scallops from Erquy</p>
                      <p>Candied Jerusalem artichokes, truffle</p>
                    </div>
                    <div className="hidden sm:flex flex-col py-5 justify-end w-4/12">
                      <p className="broder border-dashed border-b border-slate-500"></p>
                    </div>
                    <p className="flex items-end sm:m-0 m-auto   py-0 sm:py-4">
                      $40
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* DEssert */}

        <div>
          <h5>Starters</h5>
          <br />
          <div className="flex flex-col gap-8">
            {React.Children.toArray(
              [1, 2].map((item) => {
                return (
                  <div className="flex justify-between gap-2">
                    <img
                      className="m-auto w-28 h-24 sm:w-20 sm:h-20 rounded-xl sm:rounded-full"
                      src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                    <div className="flex flex-col justify-center">
                      <p>Raw Scallops from Erquy</p>
                      <p>Candied Jerusalem artichokes, truffle</p>
                    </div>
                    <div className="hidden sm:flex flex-col py-5 justify-end w-4/12">
                      <p className="broder border-dashed border-b border-slate-500"></p>
                    </div>
                    <p className="flex items-end sm:m-0 m-auto   py-0 sm:py-4">
                      $40
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
