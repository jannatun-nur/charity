import logo from "../../public/image/Frame 21.png";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="p-8 divide-y bg-[#399866] text-white rounded-2xl hidden lg:block mt-20">
        <div className=" container lg:flex flex-col lg:justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className=" ">
            <img src={logo} className="h-14 w-14" />
          </div>

          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-white font-medium">
                Company
              </h3>
              <ul className="space-y-1 font-thin">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Works
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-white font-medium">
                Help
              </h3>
              <ul className="space-y-1 font-thin">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase font-meduim text-white">Resources</h3>
              <ul className="space-y-1 font-thin">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <div className=" grid lg:grid-cols-2 gap-4">
                <p className="text-4xl">
                  <CiFacebook />
                </p>
                <p className="text-4xl">
                  <FaTwitter />
                </p>
                <p className="text-4xl">
                  <FaInstagram />
                </p>
                <p className="text-4xl">
                  <FaYoutube />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* for mobile */}
      <div className=" bg-[#399866] text-white rounded-2xl mt-7">
      <div className="grid grid-cols-2 e  p-5  lg:hidden">
        <section>
          <img src={logo} className="h-10 w-10" />
        </section>

        <section className="my-3">
          <p>Help</p>
          <ul className="space-y-1 font-thin my-3">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
        </section>

        <section>
        <p>Company</p>
        <ul className="space-y-1 font-thin my-3">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Works
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Career
                  </a>
                </li>
              </ul>
        
        
        </section>


        <section>
          <p>Resoures</p>
          <ul className="space-y-1 font-thin my-3">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
        </section>
      </div>

      <div className="flex justify-center gap-3 text-2xl  lg:hidden">
<CiFacebook />
<FaTwitter />
<FaInstagram />
<FaYoutube />
</div>

      </div>

     



    </div>
  );
};

export default Footer;
