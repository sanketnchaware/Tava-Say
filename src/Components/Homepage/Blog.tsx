import React from "react";
import CustomHeading from "../Common/CustomHeading";

const Blog = () => {
  return (
    <div className="my-20 sm:my-40 flex flex-col gap-y-8">
      {/* OFfers */}
      <div className="m-auto w-full sm:w-8/12 ">
        <div className="flex flex-col gap-y-3 items-center">
          {" "}
          <CustomHeading color="Gunmetal" text=" Blog" />
          <h6 className="text-center">Be First Who Read News</h6>
          <p className="text-center w-9/12">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>

        <div className="grid  gap-6 my-4 grid-cols-1 sm:grid-cols-2">
          {React.Children.toArray(
            [1, 2].map((item) => {
              return (
                <div className="border">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-full"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <p>Restaurants</p>
                      <p>Feb 22, 2022</p>
                    </div>
                    <p>
                      The Most Popular Delicious Food Of Mediterranean Cuisine
                    </p>
                    <p>
                      Capitalize on low-hanging fruit to identify a ballpark
                      value added matrix economically and the creative activity
                      to beta test override the food quality.
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
