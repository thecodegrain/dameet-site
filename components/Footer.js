import Link from "next/link";

const Footer = () => {
  return (
    <section className="eq-space bg-dark footer-bg">
      <div className="container">
        <footer className="split">
          <div>
            <Link href="/">
              <a className="footer__logo">Da meet</a>
            </Link>
            <div className="footer__list">
              <a className="" href="https://codegra.in/">
                by codegr.in
              </a>
            </div>
          </div>
          <div className="footer-links a-self">
            <ul className="footer__list">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Schedule</a>
                </Link>
              </li>
              <li>
                <Link href="/webinar">
                  <a>Mainstage</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="a-self social-links">
            <ul className="footer__list">
              <li>
                <a href="https://instagram.com/codegra.in">ig</a>
              </li>
              <li>
                <a href="https://twitter.com/codegrain">tw</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCPKsb4U7x_4Ws-RsKQThVAA/featured">
                  yt
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
