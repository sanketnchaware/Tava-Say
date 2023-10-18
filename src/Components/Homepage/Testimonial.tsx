import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomHeading from "../Common/CustomHeading";
const Testimonial = () => {
  return (
    <div className=" py-10 bg-Gunmetal">
      <div className=" flex flex-col gap-4 text-white w-full sm:w-9/12 m-auto">
        <CustomHeading color="white" text="Testimonial" />
        <h6 className="">What our clients say</h6>
        <p>
          We love to hear from customers, so please leave a comment or say hello
          in an email.
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default Testimonial;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
];
function Slider() {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        // infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="  p-6" key={index}>
              <div className="flex items-center">
                <img
                  src={imageUrl.url}
                  className="w-10 h-10 rounded-full"
                  alt="movie"
                />
                <div>
                  <p>Daniyal Sppra</p>
                  <p>Newyork </p>
                </div>
              </div>
              <div className="border-Gainsboro border-t  "></div>
              <p>
                "It is professional, considers everyone's time, can think about
                the There are many variations of passages whole probls small
                niche, friendly. "It is professional, considers everyone's time,
                can think about the There are many variations of passages whole
                probls small niche, friendly.
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
