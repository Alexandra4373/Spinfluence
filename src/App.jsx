import logo from "./assets/logo.png";
import menu from "./assets/menu.png";
import word from "./assets/Group 15.png";
import press from "./assets/press.png";
import vision from "./assets/vision.png";
import bg from "./assets/background.png";
function App() {
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
              <ul className="flex gap-5 cursor-pointer">
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <div className="flex gap-5">
                <h6>Login</h6>
                <img src={menu} />
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
                      IT solutions for your business.
                    </h1>
                    <p className="mt-5">
                      Hub IT allows your business and technology computers to
                      store, transmit, analyze, and manipulate big data in the
                      digital world.
                    </p>
                    <button className="bg-primary p-5 mt-5">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="">
              <img src={bg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
