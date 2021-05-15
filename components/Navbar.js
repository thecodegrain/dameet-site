import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  //DATE Logic
  let myDate = new Date();
  let hrs = myDate.getHours();
  let greet;
  if (hrs < 12) greet = "Good Morning ";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon ";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening ";

  //Auth stuff
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container">
      <header>
        <nav className="nav">
          {/* <Image src="/rupee.png" width={50} height={48} /> */}
          <Link href="/">
            <a className="logo">Da meet</a>
          </Link>
          {authReady && (
            <ul className="nav__list">
              <li>
                <Link href="/">
                  <a className="hidden">Schedule</a>
                </Link>
              </li>
              <li>
                <Link href="/webinar">
                  <a className="hidden">Mainstage</a>
                </Link>
              </li>
              {!user && (
                <li onClick={login}>
                  <a className="btn nav__btn">Login</a>
                </li>
              )}
              {user && <li>{greet + user.user_metadata.full_name + " 🚀"}</li>}
              {user && (
                <li onClick={logout}>
                  <a className="btn nav__btn">Logout</a>
                </li>
              )}
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
