import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Home() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Da Meet by Codegrain | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* INTRO SECTION */}
      <section className="intro eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content flow-content--large large-space">
              <h1>The ultimate design conference experience. ✌</h1>

              <a className="btn large-space" onClick={login}>
                Secure a Spot
              </a>
            </div>
            <div>
              <Image src="/img/hero.png" width={587} height={726}></Image>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}

      <section className="eq-space card-section bg-light">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>
                <span className="bg-accent accent-bg">Ambitious</span> creatives
                coming together virtually.
              </h2>
              <p>
                For our third year running, Frontrow is more than a conference.
                It's an experience that brings the most talented & passionate
                creatives in the world together, virtually.
              </p>

              <a className="btn large-space" onClick={login}>
                Sign up now
              </a>
            </div>
            <div>
              <Image src="/img/second.png" width={500} height={414}></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section some icons and shit */}
      <section className="eq-space"></section>

      {/* Speaker SECTION */}

      <section className="eq-space card-section bg-light">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>
                Our <span className="bg-accent accent-bg">2021</span> Speakers
              </h2>
              <p>We have shakers of the industry</p>
            </div>
            <div className="a-self__end">
              <a className="btn" onClick={login}>
                Secure a Spot
              </a>
            </div>
          </div>
          <div className="speaker-cards large-space">
            <div className="speaker-card__single a-self">
              <Image src="/img/team-01.jpg" width={220} height={220} alt="" />
              <h5 className="">Manan Gouhari</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image src="/img/team-02.jpg" width={220} height={220} alt="" />
              <h5>Hardy Smith</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image src="/img/team-03.jpg" width={220} height={220} alt="" />
              <h5>Shubhang Rajput</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image src="/img/team-04.jpg" width={220} height={220} alt="" />
              <h5>Rahul Mane</h5>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOURTH SECTION */}
      <section className="eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>Frequently Asked Questions. 🤔 </h2>

              <div className="flow-content flow-content--large">
                <details className="accordion">
                  <summary className="h4 bg-light large-space">
                    When is The Dain Walker Experience?
                  </summary>
                  <p className="bg-light">
                    The workshop is happening at 5pm EST on May 12th
                  </p>
                </details>
                <details>
                  <summary className="h4 bg-light">How do I attend?</summary>
                  <p className="bg-light">
                    We built our own platform! No Youtube links, no Zoom calls.
                    Simply sign up and everything is there!
                  </p>
                </details>
                <details>
                  <summary className="h4 bg-light">
                    What if I miss the session?
                  </summary>
                  <p className="bg-light">
                    We get it, things get in the way. If you have a VIP pass,
                    you can rewatch sessions at any time.
                  </p>
                </details>
                <details>
                  <summary className="h4 bg-light">
                    What is Frontrow2021?
                  </summary>
                  <p className="bg-light">
                    Frontrow is a virtual conference happening on May 10 - 14
                    featuring top designers like Chris Do. Workshops, mentoring,
                    networking & so much more!
                  </p>
                </details>

                <a className="btn bg-accent large-space" onClick={login}>
                  Secure a Spot
                </a>
              </div>
            </div>
            <div className="vertical-center">
              <Image src="/img/second.png" width={500} height={414}></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
