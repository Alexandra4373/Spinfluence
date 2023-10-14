import logo from "./assets/logo.png";
import menu from "./assets/menu.png";

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
            <div className=" flex flex-col justify-center items-center bg-hero text-white p-20">
              <h1>
                The dest IT service for
                <br /> your security
              </h1>
              <p>
                Hub IT allows your business and technology computers to store
                and
                <br /> manipulate big data in the digital world.
              </p>
              <button>DISCOVER HUB</button>
              <p>Hotline: (733)865-5485</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
