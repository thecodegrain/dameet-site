import Head from "next/head";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  });
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
                <p className="h4">17-18 July 21</p>
                <h1>The ultimate community tech conference 🚀</h1>
              </div>

              <a href="/api/auth/login" className="btn">
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
                The second edition of DA MEET aims to make people normalize with
                the new normal. It's a delta where rivers of passionate
                creatives meet the sea hence forming an ocean of opportunities
                in the
                <span className="bg-accent accent-bg">virtual </span> world.
              </p>

              <a href="/api/auth/login" className="btn large-space">
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
                Hold your breath to grab your piece of cake and open yourself to
                taste the sweetness of the knowledge.
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
                You take it and you should make it. Satisfaction comes when the
                theories get into action. Let your freedom be used at its
                fullest.
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
                Conquer something new every time experimenting your knowledge.
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
              <a href="/api/auth/login" className="btn">
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
              <h5>Saish G.</h5>
              <p>UX Designer</p>
            </div>
            <div className="speaker-card__single a-self bg-white">
              <Image
                quality={100}
                src="/img/speaker-02.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Digvijay Rathore</h5>
              <p>Web Developer & AI</p>
            </div>
            <div className="speaker-card__single a-self bg-white">
              <Image
                quality={100}
                src="/img/speaker-03.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Stacey</h5>
              <p>Motion Designer</p>
            </div>
            <div className="speaker-card__single a-self bg-white">
              <Image
                quality={100}
                src="/img/speaker-04.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Coming Soon</h5>
              <p>coming soon</p>
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
                    Dameet is a virtual event happening on July 17th & 18th
                    featuring top designer, web developer, data scientist,
                    productivity guru and motion designer.
                  </p>
                </div>
                <div>
                  <h4>When is The Dameet workshop?</h4>
                  <p>The workshop is happening on July 17th & 18th</p>
                </div>
                <div>
                  <h4>How do I attend?</h4>
                  <p>
                    We built our own platform! Simply sign up and everything is
                    available in the website.
                  </p>
                </div>
                <div>
                  <h4>What if I miss the session?</h4>
                  <p>
                    We will be recording all the session which will be available
                    later on our YouTube channel
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
