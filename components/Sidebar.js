import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Sidebar = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);
  return (
    <header className="sidebar-header bg-light">
      <nav className="sidebar">
        {authReady && (
          <ul className="sidebar__list">
            <li>
              <a className="hidden sidebar-text-gray">Menu</a>
            </li>
            <li className="sidebar-flex">
              <div>
                <Link href="/dashboard">
                  <Image
                    src="/img/home.svg"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </Link>
              </div>
              <Link href="/dashboard">
                <a>Home</a>
              </Link>
            </li>
            <li className="sidebar-flex">
              <div>
                <Link href="/mainstage">
                  <Image
                    src="/img/mainstage.svg"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </Link>
              </div>
              <Link href="/mainstage">
                <a>Mainstage</a>
              </Link>
            </li>
            <li className="sidebar-flex">
              <div>
                <Link href="/schedule">
                  <Image
                    src="/img/calender.svg"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </Link>
              </div>
              <Link href="/schedule">
                <a>Schedule</a>
              </Link>
            </li>
            <li className="sidebar-flex hidden">
              <div>
                <Link href="/speakers">
                  <Image
                    src="/img/speaker.svg"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </Link>
              </div>
              <Link href="/speakers">
                <a>Speakers</a>
              </Link>
            </li>
            <li className="sidebar-flex hidden-desktop">
              <div>
                <Link href="/">
                  <Image
                    src="/img/other.svg"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </Link>
              </div>
              <Link href="/">
                <a>Other</a>
              </Link>
            </li>
            <li className="hidden">
              <a className="sidebar-text-gray">Social</a>
            </li>
            <li className="sidebar-flex hidden">
              <div>
                <Image
                  src="/img/discord.svg"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <a
                href="https://twitter.com/codegrain"
                target="_blank"
                className="hidden"
              >
                Discord
              </a>
            </li>
            <li className="sidebar-flex hidden">
              <div>
                <Image
                  src="/img/telegram.svg"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <a
                href="https://instagram.com/codegra.in"
                target="_blank"
                className="hidden"
              >
                Telegram
              </a>
            </li>
            <li>
              <a className="hidden sidebar-text-gray">General</a>
            </li>
            {!user && (
              <li className="sidebar-flex hidden" onClick={login}>
                <div>
                  <Image
                    src="/img/login.svg"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </div>
                <a className="hidden">Login</a>
              </li>
            )}
            {user && (
              <li className="sidebar-flex hidden" onClick={logout}>
                <div>
                  <Image
                    src="/img/logout.svg"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </div>
                <a className="hidden">Logout</a>
              </li>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Sidebar;
