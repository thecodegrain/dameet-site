import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

const Other = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Da Meet by Codegrain | Webinar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          content="Da meet, The ultimate design conference experience by Codegrain"
          name="description"
        />
      </Head>
      <div className="container__lg">
        <div className="split2">
          <Sidebar />
          <section className="small-space">
            <div className="info-grid">
              <div className="info-card-row info-cards bg-light">
                <div>
                  <h4>Plan out your event schedule</h4>
                  <Link href="/schedule">
                    <a className="btn small-space">View agenda</a>
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
                    href="https://twitter.com/codegrain"
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
                    href="https://instagram.com/codegra.in"
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
          <div className="margin-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Other;
