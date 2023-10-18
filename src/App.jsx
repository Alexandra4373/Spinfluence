import { useState } from "react";

import logo from "./assets/logo.png";
import menu from "./assets/menu.png";
import word from "./assets/Group 15.png";
import press from "./assets/press.png";
import vision from "./assets/vision.png";
import bg from "./assets/background.png";
import IT from "./assets/IT.png";
import data from "./assets/Data.png";
import cat from "./assets/Category.png";
import wallet from "./assets/Wallet.png";
import edit from "./assets/Edit.png";
import close from "./assets/close.png";
import fb from "./assets/fb.png";
import twitter from "./assets/x.png";
import google from "./assets/google.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="">
        {/* Nav and hero */}
        <div className="">
          <div className="container">
            {/* Nav */}

            <div className="flex items-center justify-between py-4 ">
              <div className="">
                <img src={logo} />
              </div>

              <ul className="font-poppins lg:flex gap-5 cursor-pointer sm:hidden xs:hidden">
                <li className="underline text-primary">Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
              </ul>

              <ul
                className={`font-poppins lg:hidden gap-5 ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
              </ul>

              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white absolute top-4 right-4 cursor-pointer"
                >
                  {isMenuOpen ? (
                    <img
                      src={close}
                      alt="Close Icon"
                      className="w-[25%] h-[25%]"
                    />
                  ) : (
                    <img src={menu} alt="Menu Icon" />
                  )}
                </button>
              </div>

              <div className="font-poppins lg:flex gap-5 sm:hidden xs:hidden cursor-pointer">
                <h6>Login</h6>
                <img src={menu} className="" />
              </div>
            </div>

            {/* Hero */}
            <div className=" flex flex-col justify-center items-center bg-hero text-white p-10">
              <h1 className="text-[50px] line-h-69.25 font-poppins font-semibold">
                The best IT service for
                <br /> your security
              </h1>
              <p className="p-3 font-inter font normal text-[16px]">
                Hub IT allows your business and technology computers to store
                and
                <br /> manipulate big data in the digital world.
              </p>
              <div className="flex justify-center items-center p-3">
                <button className="bg-primary  rounded-md p-4 text-[14px] line-h-14 font-normal font-inter mt-5">
                  DISCOVER HUB
                </button>
                <p className="p-5 font-inter underline line-h-14 text-center text-[14px]">
                  Hotline: (733)865-5485
                </p>
              </div>
            </div>

            {/* wordpress */}
            <div className="py-20">
              <div className="flex flex-wrap justify-center  gap-10 ">
                <div className=" border-primary border rounded p-5">
                  <img src={word} />
                  <h4 className="text-center text-lg font-bold ">
                    Core Wordpress
                  </h4>
                  <p className="text-center">
                    Hub IT allows your business and
                    <br />
                    technology computers to store,
                    <br />
                    analyze, and manipulate big data in <br />
                    the digital world.
                  </p>
                </div>
                <div className="border border-primary rounded p-5">
                  <img src={press} />
                  <h4 className="text-center text-lg font-bold ">
                    Core Wordpress
                  </h4>
                  <p className="text-center">
                    Hub IT allows your business and
                    <br />
                    technology computers to store,
                    <br />
                    analyze, and manipulate big data in <br />
                    the digital world.
                  </p>
                </div>
                <div className="border border-primary rounded p-5 justify-center">
                  <img src={word} />
                  <h4 className="text-center text-lg font-bold ">
                    Core Wordpress
                  </h4>
                  <p className="text-center">
                    Hub IT allows your business and
                    <br />
                    technology computers to store,
                    <br />
                    analyze, and manipulate big data in <br />
                    the digital world.
                  </p>
                </div>
              </div>
            </div>

            {/* Company's vision */}
            <div className="py-20">
              <div className="container">
                <div className="flex">
                  <div className="flex-1">
                    <img src={vision} />
                  </div>
                  <div className="flex-1 py-20">
                    <h5 className="text-[16px] line-h-332 font-poppins font-semibold">
                      COMPANY'S VISION
                    </h5>
                    <h1 className="text-[48px] line-h-64 font-poppins font-normal">
                      IT solutions <br />
                      for your business.
                    </h1>
                    <p className="text-[20px] line-h-32 font-inter font-normal mt-5">
                      Hub IT allows your business and technology <br />{" "}
                      computers to store, transmit, analyze, and <br />{" "}
                      manipulate big data in the digital world.
                    </p>
                    <button className="bg-primary p-5  px-9 mt-5 border rounded fonr-poppins font-bold text-white text-center text-[16px] line-h-24">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-20">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[48px] line-h-64 font-poppins font-semibold">
                  IT solutions for your business.
                </h1>
                <p className="text-[20px] line-h-36.3 font-inter font-normal mt-5">
                  Hub IT allows your business and technology computers to store,
                  transmit,
                  <br /> analyze, and manipulate big data in the digital world.
                </p>
              </div>
              <div className="flex py-10 relative">
                <div className="flex-1">
                  <img src={IT} className="z-0" />
                  <div className=" flex justify-center  ">
                    <button className="text-[30px] line-h-30 font-inter font-semibold shadow-lg  shadow-primary absolute top-1/2">
                      IT Security
                    </button>
                  </div>
                  <p className="text-[20px] line-h-36.3 font-inter font-normal">
                    Hub IT allows your business and technology computers to
                    store, transmit, analyze, and manipulate big data in the
                    digital world.
                  </p>
                </div>

                <div className="flex-1">
                  <img src={data} />
                  <div className=" flex justify-center  ">
                    <button className="text-[30px] line-h-30 font-inter font-semibold">
                      Mobile data
                    </button>
                  </div>
                  <p className="text-[20px] line-h-36.3 font-inter font-normal">
                    Hub IT allows your business and technology computers to
                    store, transmit, analyze, and manipulate big data in the
                    digital world.
                  </p>
                </div>
                <div className="flex-1">
                  <img src={data} />
                  <div className=" flex justify-center  ">
                    <button className="text-[30px] line-h-30 font-inter font-semibold">
                      For Companies
                    </button>
                  </div>
                  <p className="text-[20px] line-h-36.3 font-inter font-normal">
                    Hub IT allows your business and technology computers to
                    store, transmit, analyze, and manipulate big data in the
                    digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="">
              <img src={bg} />
            </div>
          </div>
          {/* testimonials */}
          <div className="container py-20">
            <h1 className="flex justify-center items-center text-[38px] font-bold">
              Why our products are different
            </h1>

            <div className="py-20">
              <div className="flex flex-wrap justify-start gap-10 ">
                <div className=" p-10">
                  <img src={cat} />
                  <h4 className="text-start text-lg font-bold mt-5">
                    Solve problem Real time
                  </h4>
                  <p className="text-start mt-5">
                    Amet minim molit non deserunt <br /> ullamco est sit aliqua
                    dolor do amet sint.
                    <br />
                  </p>
                  <p className="mt-5 text-primary">Learn more</p>
                </div>

                <div className="p-10">
                  <img src={wallet} />
                  <h4 className="text-start text-lg font-bold mt-5">
                    Secured & Safe Payments
                  </h4>
                  <p className="text-start mt-5">
                    Amet minim molit non deserunt <br /> ullamco est sit aliqua
                    dolor do amet sint.
                    <br />
                  </p>
                  <p className="mt-5 text-primary">Learn more</p>
                </div>

                <div className=" p-10 justify-start">
                  <img src={edit} />
                  <h4 className="text-start text-lg font-bold mt-5">
                    24/7 Customer support
                  </h4>
                  <p className="text-start mt-5">
                    Amet minim molit non deserunt <br /> ullamco est sit aliqua
                    dolor do amet sint.
                    <br />
                  </p>

                  <p className="mt-5 text-primary">Learn more</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact us */}
          <div className="container py-20">
            <div className="flex flex-col justify-center items-center text-white bg-cta p-10">
              <h1 className="text-xl font-bold">
                Ready to get started?Get your
                <br />
                finance out of the way
              </h1>
              <p>
                {" "}
                If you deliver enough value, making money becomes the easy part.
                <br />
                Why should you be stressful? Let us make this easier for you.
              </p>

              <button className=" rounded-md p-3 bg-primary">Contact us</button>
            </div>
          </div>

          {/* Footer */}
          <div className="container">
            <div className="flex">
              <div className="flex-1">
                <img src={logo} />
                <div className="flex gap-10 py-10">
                  <img src={twitter} />
                  <img src={fb} />
                  <img src={google} />
                </div>
              </div>
              <div className="flex-1">
                <ul>
                  <li className="text-second text-[18px] line-h-21.6 font-barlow font-bold">
                    Solution
                  </li>
                  <li>Financial Strategy</li>
                  <li>Advertising</li>
                  <li>SMM</li>
                  <li>SEO</li>
                  <li>Google AdWords</li>
                </ul>
              </div>
              <div className="flex-1">
                <ul>
                  <li className="text-second text-[18px] line-h-21.6 font-barlow font-bold">
                    Company
                  </li>
                  <li>8910 University Center Lane</li>
                  <li>Suite 620 San Deigo, CA 92102</li>
                  <li>Phone 858-490-6910</li>
                  <li>Fax 858-490-6985</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 ">
                <ul className="flex gap-10">
                  <li>About</li>
                  <li>Services</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="flex-1">
                <p>2018 Casumi, Made by Deo Themes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
