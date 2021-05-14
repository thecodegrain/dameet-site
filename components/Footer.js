import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-light">
      <section className="eq-space bg-dark footer-bg">
        <div className="container">
          <footer className="split">
            <Link href="/">
              <a className="logo footer__logo">Da meet</a>
            </Link>
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
    </div>
  );
};

export default Footer;
