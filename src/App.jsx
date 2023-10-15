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

              <ul className="lg:flex gap-5 cursor-pointer sm:hidden xs:hidden">
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
              </ul>

              <ul
                className={`lg:hidden gap-5 ${isMenuOpen ? "block" : "hidden"}`}
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

              <div className="lg:flex gap-5 sm:hidden xs:hidden cursor-pointer">
                <h6>Login</h6>
                <img src={menu} className="" />
              </div>
            </div>
            {/* Hero */}
            <div className=" flex flex-col justify-center items-center bg-hero text-white p-10">
              <h1 className="text-[48px] font-semibold">
                The best IT service for
                <br /> your security
              </h1>
              <p className="p-5">
                Hub IT allows your business and technology computers to store
                and
                <br /> manipulate big data in the digital world.
              </p>
              <div className="flex items-center p-5">
                <button className="bg-primary p-4 mt-5">DISCOVER HUB</button>
                <p className="p-5">Hotline: (733)865-5485</p>
              </div>
            </div>

            {/* wordpress */}
            <div className="py-20">
              <div className="flex flex-wrap justify-center  gap-10 ">
                <div className=" border rounded  p-5">
                  <img src={word} />
                  <h4 className="text-center text-lg font-bold">
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
                <div className="border rounded p-5">
                  <img src={press} />
                  <h4 className="text-center text-lg font-bold">
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
                <div className="border rounded p-5 justify-center">
                  <img src={word} />
                  <h4 className="text-center text-lg font-bold">
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
                    <h5 className="">COMPANY'S VISION</h5>
                    <h1 className="text-[36px] font-bold">
                      IT solutions <br />
                      for your business.
                    </h1>
                    <p className="mt-5">
                      Hub IT allows your business and technology <br />{" "}
                      computers to store, transmit, analyze, and <br />{" "}
                      manipulate big data in the digital world.
                    </p>
                    <button className="bg-primary p-5 mt-5 border rounded">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-20">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[36px] font-bold">
                  IT solutions for your business.
                </h1>
                <p className="mt-5">
                  Hub IT allows your business and technology computers to store,
                  transmit,
                  <br /> analyze, and manipulate big data in the digital world.
                </p>
              </div>
              <div className="flex py-10">
                <div className="flex-1">
                  <img src={IT} />
                  <div className=" flex justify-center  ">
                    <button>IT Security</button>
                  </div>
                  <p>
                    Hub IT allows your business and technology computers to
                    store, transmit, analyze, and manipulate big data in the
                    digital world.
                  </p>
                </div>

                <div className="flex-1">
                  <img src={data} />
                  <div className=" flex justify-center  ">
                    <button>Mobile data</button>
                  </div>
                  <p>
                    Hub IT allows your business and technology computers to
                    store, transmit, analyze, and manipulate big data in the
                    digital world.
                  </p>
                </div>
                <div className="flex-1">
                  <img src={data} />
                  <div className=" flex justify-center  ">
                    <button>IT Security</button>
                  </div>
                  <p>
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

              <button className=" rounded-lg pl-10 bg-primary">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
