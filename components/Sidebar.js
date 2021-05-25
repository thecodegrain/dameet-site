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
                    src="/img/Group2.png"
                    width={30}
                    height={30}
                    quality={100}
                  ></Image>
                </Link>
              </div>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="sidebar-flex">
              <div>
                <Link href="/mainstage">
                  <Image
                    src="/img/Group3.png"
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
                <Link href="/speakers">
                  <Image
                    src="/img/Group.png"
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
            <li className="sidebar-flex">
              <div>
                <Link href="/schedule">
                  <Image
                    src="/img/Group2.png"
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
            <li>
              <a className="hidden sidebar-text-gray">Social</a>
            </li>
            <li className="sidebar-flex hidden">
              <div>
                <Image
                  src="/img/Group3.png"
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
                  src="/img/Group.png"
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
                    src="/img/Group2.png"
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
                    src="/img/Group3.png"
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
