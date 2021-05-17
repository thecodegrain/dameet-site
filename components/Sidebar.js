import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Sidebar = () => {
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
    <header className="sidebar-header">
      <nav className="sidebar">
        {/* <Image src="/rupee.png" width={50} height={48} /> */}
        <Link href="/">
          <a className="logo">Da meet</a>
        </Link>
        {authReady && (
          <ul className="sidebar__list">
            <li>
              <a className="hidden sidebar-text-gray">Menu</a>
            </li>
            <li className="sidebar-flex">
              <div>
                <Image
                  src="/img/Group2.png"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <Link href="/">
                <a className="hidden">Home</a>
              </Link>
            </li>
            <li className="sidebar-flex">
              <div>
                <Image
                  src="/img/Group3.png"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <Link href="/mainstage">
                <a className="hidden">Mainstage</a>
              </Link>
            </li>
            <li className="sidebar-flex">
              <div>
                <Image
                  src="/img/Group.png"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <Link href="/speakers">
                <a className="hidden">Speakers</a>
              </Link>
            </li>
            <li className="sidebar-flex">
              <div>
                <Image
                  src="/img/Group2.png"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <Link href="/schedule">
                <a className="hidden">Schedule</a>
              </Link>
            </li>
            <li>
              <a className="hidden sidebar-text-gray">Social</a>
            </li>
            <li className="sidebar-flex">
              <div>
                <Image
                  src="/img/Group3.png"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <a className="hidden">Discord</a>
            </li>
            <li className="sidebar-flex">
              <div>
                <Image
                  src="/img/Group.png"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <a className="hidden">Telegram</a>
            </li>
            <li>
              <a className="hidden sidebar-text-gray">General</a>
            </li>
            {!user && (
              <li className="sidebar-flex" onClick={login}>
                <div>
                  <Image
                    src="/img/Group2.png"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </div>
                <a
                  className="hidden"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Login
                </a>
              </li>
            )}
            {user && (
              <li className="sidebar-flex" onClick={logout}>
                <div>
                  <Image
                    src="/img/Group3.png"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </div>
                <a
                  className="hidden"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Sidebar;
