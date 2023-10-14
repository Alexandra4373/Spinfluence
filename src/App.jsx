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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
