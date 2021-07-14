import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const Links = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="googlebot" content="index,follow" />
        <title>Da Meet by Codegrain | Speakers</title>
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          content="Da meet, The ultimate design & tech community event by Codegrain"
          name="description"
        />
        <meta content="Dameet by Codegrain." property="og:title" />
        <meta content="Codegrain" property="og:site_name" />
        <meta
          content="Dameet is a virtual event that
      features top designer, web developer, data scientist,
      productivity guru and motion designer."
          property="og:description"
        />
        <meta content="/img/og-social.jpg" property="og:image" />
        <meta content="https://dameet.codegra.in/" property="og:url" />
      </Head>
      <div className="container">
        <div>
          <section className="small-space a-self">
            <div className="flow-content">
              <h1 className="text-center">Shared Links</h1>
              <h5 className="text-center">
                Quick links to everything Da meet!!
              </h5>
            </div>
          </section>
          <section className="small-space">
            <div className="info-grid">
              <div className="info-card-row info-cards bg-light">
                <div>
                  <h4>Signup for Da meet 2021 - a Design & Tech Event</h4>
                  <Link href="/">
                    <a className="btn small-space">Register now</a>
                  </Link>
                </div>
                <Image
                  src="/img/calender.svg"
                  width={150}
                  height={150}
                  quality={100}
                ></Image>
              </div>
              <div className="info-card-row  info-cards bg-light">
                <div>
                  <h4>Discover our speakers line-up</h4>
                  <Link href="/speakers">
                    <a className="btn small-space">View speakers</a>
                  </Link>
                </div>
                <Image
                  src="/img/speaker.svg"
                  width={150}
                  height={150}
                  quality={100}
                ></Image>
              </div>
              <div className="info-card-row  info-cards bg-light">
                <div>
                  <h4>Be part of our community on discord</h4>
                  <a
                    href="https://discord.gg/ZYpp89Vx6f"
                    target="_blank"
                    className="btn small-space"
                  >
                    Join now
                  </a>
                </div>
                <Image
                  src="/img/discord.svg"
                  width={150}
                  height={150}
                  quality={100}
                ></Image>
              </div>
              <div className="info-card-row  info-cards bg-light">
                <div>
                  <h4>Or join the chat on telegram</h4>
                  <a
                    href="https://telegram.me/dameet"
                    target="_blank"
                    className="btn small-space"
                  >
                    Hop in
                  </a>
                </div>
                <Image
                  src="/img/telegram.svg"
                  width={150}
                  height={150}
                  quality={100}
                ></Image>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Links;
