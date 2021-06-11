import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="container">
      <header>
        <nav className="nav">
          {/* <Image src="/rupee.png" width={50} height={48} /> */}
          <Link href="/">
            <a className="logo">Da meet</a>
          </Link>
          <ul className="nav__list">
            <li>
              <Link href="/schedule">
                <a className="hidden">Schedule</a>
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/dashboard">
                  <a className="hidden">Dashboard</a>
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <a href="/api/auth/login" className="hidden">
                  Dashboard
                </a>
              </li>
            )}
            {!user && (
              <li>
                <a href="/api/auth/login" className="btn nav__btn">
                  Login
                </a>
              </li>
            )}
            {user && (
              <li>
                <a href="/api/auth/logout" className="btn nav__btn">
                  Logout
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
