
import fb from "../../assets/icons/homepage/fb.svg";
import insta from "../../assets/icons/homepage/insta.svg";
import twitter from "../../assets/icons/homepage/twitter.svg";
import pintrest from "../../assets/icons/homepage/pintrest.svg";
import CustomHeading from "../Common/CustomHeading";

const Footer = () => {
  return (
    <div className="text-FloralWhite">
      <div className="relative">
        <div className="w-8/12 m-auto p-16 bg-Gunmetal absolute left-0 right-0 top-0 bottom-0 h-1/2 ">
          <div className="flex  flex-col gap-y-4 items-center">
            {" "}
            <CustomHeading color="white" text="RESERVATION" />
            <h6 className="text-center">Book you table now</h6>
            <div className="grid  w-full grid-cols-2 justify-between gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent px-4 py-4 border placeholder:text-white  border-BlackCoral "
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full border-BlackCoral bg-transparent px-4 py-4 border placeholder:text-white "
              />
            </div>
            <div className="gap-4 grid grid-cols-3">
              <input
                placeholder="Person"
                type="text "
                className="w-full bg-transparent px-4 py-4 border placeholder:text-white  border-BlackCoral"
              />
              <input
                placeholder="Timing"
                type="text "
                className="w-full bg-transparent px-4 py-4 border placeholder:text-white  border-BlackCoral"
              />
              <input
                placeholder="Date"
                type="text "
                className="w-full bg-transparent px-4 py-4 border placeholder:text-white  border-BlackCoral"
              />
            </div>
            <button className="bg-white  text-Gunmetal px-6 py-4">
              Book a table
            </button>
          </div>
        </div>
        <img
          className="w-full"
          src="https://10619-2.s.cdn12.com/rests/original/102_514679913.jpg"
          alt=""
        />
      </div>

      <div className=" m-auto bg-Gunmetal">
        <div className="w-9/12 m-auto py-10">
          <div className="grid gap-4 sm:grid-cols-3 grid-cols-1 justify-between items-center">
            <p className="sm:block hidden">Instagram Feed</p>
            <div>
              {" "}
              <img
                src="/brand_logo.png"
                className="w-56 mx-auto"
                alt="brand_logo"
              />
            </div>

            <div className="flex  justify-center sm:justify-end gap-4  items-center">
              {[fb, insta, twitter, pintrest].map((icon) => {
                return <img src={icon} alt="social media icons" />;
              })}
            </div>
            <p className="sm:block hidden border-y  sm:m-0 m-auto border-Fawn w-fit">
              CONTACT
            </p>
            <p className="sm:block hidden text-center">
              {" "}
              Join our mailing list for updates, Get news & offers events.
            </p>
            <div className="text-right sm:block hidden">Working Hours</div>
            <div>
              <p className="sm:text-left text-center">
                G21, The Brigade Arcade, Metropolis, Mahadevapura, Whitefield,
                Bangalore
              </p>
              <p className="sm:text-left text-center">
                <span className="theme-text">Call -</span> +919611959312
              </p>
              <p
                className="theme-text sm:text-left text-center
"
              >
                tavasay@gmail.com
              </p>
            </div>
            <div className="flex ">
              <input
                placeholder="Email"
                className="px-4 w-9/12 bg-transparent border py-2  border-slate-600 "
                type="text"
              />
              <button className="bg-white  w-fit px-2 sm:w-3/12  text-Gunmetal ">
                Suscribe
              </button>
            </div>
            <div>
              <p className=" text-center sm:text-right">
                <span className="theme-text">Mon – Sat: </span>11.45 am – 10.30
                pm
              </p>

              <p className=" text-center sm:text-right">
                <span className="theme-text">Sun: </span>
                Closed
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 px-4 border-t border-slate-600 flex-col sm:flex-row  flex justify-between ">
          <p className="sm:text-base text-xs text-center sm:text-left text-Gainsboro">
            © Copyright - Tava Say 2023{" "}
          </p>
          <p className="text-center sm:text-base text-xs sm:text-left text-Gainsboro ">
            {" "}
            Made with ❤️ by Sanket Chaware
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
