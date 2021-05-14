import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  const router = useRouter();

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
            <div className="container flow-content flow-content--large">
              <h1>The ultimate design conference experience. ✌</h1>
              {!user && (
                <a className="btn large-space" onClick={login}>
                  Secure a Spot
                </a>
              )}
              {user && (
                <Link href="/webinar">
                  <a className="btn large-space">Mainstage</a>
                </Link>
              )}
            </div>
            <div className="pl">
              <Image src="/b.jpg" width={760} height={760}></Image>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}

      <section className="card-section bg-light eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>Ambitious creatives coming together virtually.</h2>
              <p>
                For our third year running, Frontrow is more than a conference.
                It's an experience that brings the most talented & passionate
                creatives in the world together, virtually.
              </p>
              {!user && (
                <a className="btn large-space" onClick={login}>
                  Sign up now
                </a>
              )}
              {user && (
                <Link href="/webinar">
                  <a className="btn large-space">Mainstage</a>
                </Link>
              )}
            </div>
            <div className="pl">
              <Image src="/second.png" width={500} height={414}></Image>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}

      <section className="eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h3>Our 2021 Speakers</h3>
              <p>We have shakers of the industry</p>
            </div>
          </div>
          <div className="speaker-cards large-space">
            <div class="speaker bg-light">
              <img src="/img/team-01.jpg" alt="" />
              <div class="info">
                <h3 class="name">Adriana Ramirez</h3>
                <p class="position">Lead UI/UX</p>
                <p>Sed sit tellus sit mauris sit hendrerit pellentesque.</p>
              </div>
            </div>
            <div class="speaker bg-light">
              <img src="/img/team-02.jpg" alt="" />
              <div class="info">
                <h3 class="name">Calvin Miles</h3>
                <p class="position">UI/UX Designer</p>
                <p>Sed sit tellus sit mauris sit hendrerit pellentesque.</p>
              </div>
            </div>
            <div class="speaker bg-dark speaker--mirrored">
              <img src="/img/team-03.jpg" alt="" />
              <div class="info">
                <h3 class="name">Hardy Smith</h3>
                <p class="position">Lead developer</p>
                <p>Sed sit tellus sit mauris sit hendrerit pellentesque.</p>
              </div>
            </div>

            <div class="speaker bg-dark speaker--mirrored">
              <img src="/img/team-04.jpg" alt="" />
              <div class="info">
                <h3 class="name">Janae Watts</h3>
                <p class="position">Front-end developer</p>
                <p>Sed sit tellus sit mauris sit hendrerit pellentesque.</p>
              </div>
            </div>
            {!user && (
              <a className="btn xl-space a-center" onClick={login}>
                Secure a Spot
              </a>
            )}
            {user && (
              <Link href="/webinar">
                <a className="btn xl-space a-center">Mainstage</a>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* FOURTH SECTION */}
      <section className="bg-light eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>Frequently Asked Questions. 🤔 </h2>

              <div className="flow-content flow-content--small">
                <h4 className="large-space">
                  When is The Dain Walker Experience?
                </h4>
                <p>The workshop is happening at 5pm EST on May 12th</p>
                <h4>How do I attend?</h4>
                <p>
                  We built our own platform! No Youtube links, no Zoom calls.
                  Simply sign up and everything is there!
                </p>
                <h4>What if I miss the session?</h4>
                <p>
                  We get it, things get in the way. If you have a VIP pass, you
                  can rewatch sessions at any time.
                </p>
                <h4>What is Frontrow2021?</h4>
                <p>
                  Frontrow is a virtual conference happening on May 10 - 14
                  featuring top designers like Chris Do. Workshops, mentoring,
                  networking & so much more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
