import React from "react";
import CustomHeading from "../Common/CustomHeading";

const Offers = () => {
  return (
    <div className="my-20 sm:my-40 flex flex-col gap-y-8">
      {/* OFfers */}
      <div className="m-auto w-full sm:w-8/12 ">
        <div className="flex flex-col gap-y-3 items-center">
          {" "}
          <CustomHeading color="Gunmetal" text=" OFFERS" />
          <h6 className="text-center">Offer Our special Offer dishes</h6>
          <p className="text-center w-9/12">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>
        <div className="grid  gap-6 my-4 grid-cols-1 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      {/*Popular Dishes  */}
      <div className="m-auto w-full sm:w-8/12 ">
        <div className="flex flex-col gap-y-3 items-center">
          {" "}
          <CustomHeading color="Gunmetal" text=" POPULAR DISHES" />
          <h6 className="text-center">Offer Our special Offer dishes</h6>
          <p className="text-center w-9/12">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>
        <div className="grid-cols-1 sm:grid-cols-4 grid gap-4  my-8 ">
          {React.Children.toArray(
            [1, 2, 3, 4].map((item) => {
              return (
                <div className=" flex  gap-y-2 flex-col">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                    alt="popular_menu_image"
                  />
                  <div className="flex justify-between items-center">
                    <p>Chicken Manjoori </p>
                    <p>₹ 150</p>
                  </div>
                  <p className="border-t border-Gainsboro pt-2">
                    Lorem Ipsum is that it has a more-or-less normal
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Offers;
