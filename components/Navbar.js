import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);

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
                  <Link href="/">
                    <a className="hidden" onClick={login}>
                      Dashboard
                    </a>
                  </Link>
                </li>
              )}
              {!user && (
                <li onClick={login}>
                  <a className="btn nav__btn">Login</a>
                </li>
              )}
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
