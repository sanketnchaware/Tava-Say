import fb from "../../assets/icons/homepage/fb.svg";
import insta from "../../assets/icons/homepage/insta.svg";
import twitter from "../../assets/icons/homepage/twitter.svg";
import pintrest from "../../assets/icons/homepage/pintrest.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-y px-44 py-4 border-BlackCoral ">
      <div className="flex justify-between gap-x-16  items-center">
        {[
          { page: "Home", url: "/" },
          { page: "About", url: "/about" },
          { page: "Menu", url: "/menu" },
          { page: "Reservation", url: "/reservation" },
          { page: "Gallery", url: "/gallery" },
          { page: "Blog", url: "/blog" },
          { page: "Contact", url: "/contact" },
        ].map((item) => {
          return (
            <Link
              to={item.url}
              className="hover:text-Fawn transition-all ease-linear duration-25 text-Gainsboro"
            >
              {item.page}
            </Link>
          );
        })}
      </div>
      <div className="flex  justify-between gap-x-8  items-center">
        {[
          {
            icon: fb,
            link: "https://m.facebook.com/people/Tava-Say/100081986765831/",
          },
          { icon: insta, link: "" },
          { icon: twitter, link: "" },
          { icon: pintrest, link: "" },
        ].map((item) => {
          return (
            <Link target="_blank" to={item?.link}>
              <img className="" src={item?.icon} alt="social_media_icon" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
