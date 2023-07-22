import tava from "../../assets/images/homepage/tava.png";

import fb from "../../assets/icons/homepage/fb.svg";
import insta from "../../assets/icons/homepage/insta.svg";
import twitter from "../../assets/icons/homepage/twitter.svg";
import pintrest from "../../assets/icons/homepage/pintrest.svg";

const Footer = () => {
  return (
    <div className="text-FloralWhite">
      <img
        className="w-full"
        src="https://10619-2.s.cdn12.com/rests/original/102_514679913.jpg"
        alt=""
      />

      <div className=" m-auto bg-Gunmetal">
        <div className="w-9/12 m-auto py-10">
          <div className="grid gap-2 grid-cols-3 justify-between items-center">
            <p>Instagram Feed</p>
            <div>
              {" "}
              <img src={tava} className="w-56 mx-auto" alt="brand_logo" />
            </div>

            <div className="flex  justify-end gap-4  items-center">
              {[fb, insta, twitter, pintrest].map((icon) => {
                return <img src={icon} alt="social media icons" />;
              })}
            </div>
            <p className="border-y border-Fawn w-fit">CONTACT</p>
            <p className="text-center">
              {" "}
              Join our mailing list for updates, Get news & offers events.
            </p>
            <div className="text-right">Working Hours</div>
            <div>
              <p>5 Rue Dalou, 75015 Paris</p>
              <p>
                <span className="theme-text">Call -</span> +33 156 78 89 56
              </p>
              <p className="theme-text">benoit@mail.com</p>
            </div>
            <div className="flex ">
              <input
                placeholder="Email"
                className="px-4 w-9/12 bg-transparent border py-2  border-slate-600 "
                type="text"
              />
              <button className="bg-white w-3/12  text-Gunmetal ">
                Suscribe
              </button>
            </div>
            <div>
              <p className="text-right">
                <span className="theme-text">Mon – Fri: </span>7.00am – 6.00pm
              </p>
              <p className="text-right">
                <span className="theme-text">Sat: </span>
                7.00am – 6.00pm
              </p>
              <p className="text-right">
                <span className="theme-text">Sun: </span>
                8.00am – 6.00pm
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 px-4 border-t border-slate-600 flex justify-between ">
          <p>
            © Copyright - Restaurantate | Designed by VictorFlow Templates -
            Powered by Webflow
          </p>
          <p> Styleguide / Licenses</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
