import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
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
              <Image
                quality={100}
                src="/img/hero.png"
                width={587}
                height={726}
                alt="abstract"
              ></Image>
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
                src="/img/FAQ.png"
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
                src="/img/Group.png"
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
                src="/img/Group2.png"
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
                src="/img/Group3.png"
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
            <div className="a-self__end">
              <a className="btn" onClick={login}>
                Secure a Spot
              </a>
            </div>
          </div>
          <div className="speaker-cards large-space">
            <div className="speaker-card__single a-self">
              <Image
                quality={100}
                src="/img/speaker-01.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5 className="">Manan Gouhari</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image
                quality={100}
                src="/img/speaker-02.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Hardy Smith</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image
                quality={100}
                src="/img/speaker-03.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Shubhang Rajput</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image
                quality={100}
                src="/img/speaker-04.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Rahul Mane</h5>
              <p>Lead Developer</p>
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
                  <h4 className="large-space">
                    When is The Dain Walker Experience?
                  </h4>
                  <p>The workshop is happening at 5pm EST on May 12th</p>
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
                    We get it, things get in the way. If you have a VIP pass,
                    you can rewatch sessions at any time.
                  </p>
                </div>
                <div>
                  <h4>What is Frontrow2021?</h4>
                  <p>
                    Frontrow is a virtual conference happening on May 10 - 14
                    featuring top designers like Chris Do. Workshops, mentoring,
                    networking & so much more!
                  </p>
                </div>
              </div>
            </div>
            <div className="vertical-center">
              <Image
                quality={100}
                src="/img/FAQ.png"
                width={500}
                height={414}
                alt="abstract"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
