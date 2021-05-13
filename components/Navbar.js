import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
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
      <nav>
        {/* <Image src="/rupee.png" width={50} height={48} /> */}
        <h1>Da Meet</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/webinar">
                <a>Webinar</a>
              </Link>
            </li>
            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
            {user && <li>{greet + user.user_metadata.full_name + " 🚀"}</li>}
            {user && (
              <li onClick={logout} className="btn">
                Logout
              </li>
            )}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}
