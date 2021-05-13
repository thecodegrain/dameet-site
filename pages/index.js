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
      <section className="intro">
        <div className="container">
          <div className="split">
            <div className="container flow-content flow-content--large xl-space">
              <h1>The ultimate design conference experience. ✌</h1>
              {!user && (
                <a className="btn" onClick={login}>
                  Secure a Spot
                </a>
              )}
              {user && (
                <Link href="/webinar">
                  <a className="btn">Mainstage</a>
                </Link>
              )}
            </div>
            <div className="pl">
              <Image src="/hero.jpg" width={495} height={727}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="gray-bg">
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
                <a className="btn" onClick={login}>
                  Sign up now
                </a>
              )}
              {user && (
                <Link href="/webinar">
                  <a className="btn">Mainstage</a>
                </Link>
              )}
            </div>
            <div className="pl">
              <Image src="/second.png" width={500} height={414}></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
