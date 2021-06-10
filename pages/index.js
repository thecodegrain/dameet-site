import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthContext from "../stores/authContext";

export default function Home() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Da Meet by Codegrain | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          content="Da meet, The ultimate design conference experience by Codegrain"
          name="description"
        />
      </Head>

      <Navbar />

      {/* INTRO SECTION */}
      <section className="intro eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content flow-content--large large-space">
              <div>
                <p className="h4">00-00 July 21</p>
                <h1>The ultimate community tech conference 🚀</h1>
              </div>

              <a className="btn" onClick={login}>
                Secure a Spot
              </a>
            </div>
            <div>
              <img
                src="/img/header.svg"
                width={587}
                height={726}
                alt="abstract"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="eq-space card-section bg-light">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>
                <span className="bg-accent accent-bg">Ambitious</span> creatives
                coming together virtually.
              </h2>
              <p>
                We are back with our second online edition, with more surprises
                and great speakers. It's an experience that brings the most
                talented & passionate creatives in the world together,
                <span className="bg-accent accent-bg">virtually</span>
              </p>

              <a className="btn large-space" onClick={login}>
                Sign up now
              </a>
            </div>
            <div>
              <Image
                quality={100}
                src="/img/FAQ.svg"
                width={500}
                height={414}
                alt="instagram stories"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section some icons and shit */}
      <section className="eq-space">
        <div className="container">
          <div className="split text-center">
            <div>
              <Image
                src="/img/learn.svg"
                width={250}
                height={250}
                quality={100}
              ></Image>
              <h3>Learn</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                dicta?
              </p>
            </div>
            <div>
              <Image
                src="/img/execute.svg"
                width={250}
                height={250}
                quality={100}
              ></Image>
              <h3>Execute</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, soluta?
              </p>
            </div>
            <div>
              <Image
                src="/img/community.svg"
                width={250}
                height={250}
                quality={100}
              ></Image>
              <h3>Discover</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                dignissimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKER SECTION */}

      <section className="eq-space card-section bg-light">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>
                Our <span className="bg-accent accent-bg">2021</span> Speakers
              </h2>
              <p>The best of the industry</p>
            </div>
            <div className="a-self__end speaker-cta">
              <a className="btn" onClick={login}>
                Secure a Spot
              </a>
            </div>
          </div>
          <div className="speaker-cards large-space">
            <div className="speaker-card__single a-self bg-white">
              <Image
                quality={100}
                src="/img/speaker-01.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <div className="speaker-card__single a-self bg-white">
              <Image
                quality={100}
                src="/img/speaker-02.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Tim Apple</h5>
              <p>Graphic Designer</p>
            </div>
            <div className="speaker-card__single a-self bg-white">
              <Image
                quality={100}
                src="/img/speaker-03.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Pulp Smith</h5>
              <p>Productive Ninja</p>
            </div>
            <div className="speaker-card__single a-self bg-white">
              <Image
                quality={100}
                src="/img/speaker-04.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Eathan Rik</h5>
              <p>Crypto Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content flow-content--med">
              <h2>Frequently Asked Questions. 🤔 </h2>

              <div className="flow-content">
                <div>
                  <h4 className="large-space">What is Dameet?</h4>
                  <p>
                    Dameet is a virtual workshop/webinar happening on July 17th
                    & 18th featuring top designer, developer, data scientist and
                    prductive ninja.
                  </p>
                </div>
                <div>
                  <h4>When is The Dameet workshop?</h4>
                  <p>The workshop is happening on July 17th & 18th</p>
                </div>
                <div>
                  <h4>How do I attend?</h4>
                  <p>
                    We built our own platform! No Youtube links, no Zoom calls.
                    Simply sign up and everything is there!
                  </p>
                </div>
                <div>
                  <h4>What if I miss the session?</h4>
                  <p>
                    You can request access to any of the sessions, or check the
                    platform if you are signned up.
                  </p>
                </div>
              </div>
            </div>
            <div className="vertical-center">
              <Image
                quality={100}
                src="/img/FAQ.svg"
                width={500}
                height={414}
                alt="abstract"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
