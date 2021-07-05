import Link from "next/link";

const Footer = () => {
  return (
    <section className="eq-space bg-dark footer-bg">
      <div className="container">
        <footer className="split">
          <div>
            <p className="h4">17-18 July 21</p>
            <Link href="/">
              <a className="footer__logo">Da meet</a>
            </Link>
            <div className="footer__list">
              <a href="https://codegra.in/" target="_blank">
                by codegra.in
              </a>
            </div>
          </div>
          <div></div>

          <div className="footer-links flow-content">
            <p>Follow us</p>
            <a href="https://www.instagram.com/codegra.in/" target="_blank">
              <h3
                className="bg-accent accent-bg"
                style={{ color: "var(--clr-black)" }}
              >
                #dameet2021
              </h3>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
