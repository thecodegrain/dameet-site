import Head from "next/head";
import Image from "next/image";
import AuthContext from "../stores/authContext";

export default function Home() {
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
              <a className="btn">Secure a Spot</a>
            </div>
            <div className="ml">
              <Image src="/hero.jpg" width={495} height={727}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="gray-bg">
        <div className="container">
          <div className="split">
            <div className="flow-content flow-content--large">
              <h2>Ambitious creatives coming together virtually.</h2>
              <p>
                For our third year running, Frontrow is more than a conference.
                It's an experience that brings the most talented & passionate
                creatives in the world together, virtually.
              </p>
              <a className="btn">Sign up now</a>
            </div>
            <div className="ml xl-space">
              <Image src="/all-access-01.jpg" width={120} height={120}></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
