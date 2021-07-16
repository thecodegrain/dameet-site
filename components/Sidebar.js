import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Sidebar = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return <h4 className="a-self text-center large-space">Loading...</h4>;
  if (error) return <div>{error.message}</div>;
  return (
    <header className="sidebar-header bg-light">
      <nav className="sidebar">
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
          <li className="sidebar-flex hidden">
            <div>
              <Link href="/speakers">
                <Image
                  src="/img/execute.svg"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </Link>
            </div>
            <Link href="/showfloor">
              <a>Showfloor</a>
            </Link>
          </li>
          <li className="sidebar-flex hidden-desktop">
            <div>
              <Link href="/other">
                <Image
                  src="/img/other.svg"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </Link>
            </div>
            <Link href="/other">
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
              href="https://discord.gg/ZYpp89Vx6f"
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
              href="https://telegram.me/dameet"
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
            <li className="sidebar-flex hidden">
              <div>
                <Image
                  src="/img/login.svg"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <a href="/api/auth/login" className="hidden">
                Login
              </a>
            </li>
          )}
          {user && (
            <li className="sidebar-flex hidden">
              <div>
                <Image
                  src="/img/logout.svg"
                  width={30}
                  height={30}
                  quality={100}
                ></Image>
              </div>
              <a href="/api/auth/logout" className="hidden">
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
