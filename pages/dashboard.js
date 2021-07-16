import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";

const Webinar = () => {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <html lang="en" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="googlebot" content="index,follow" />
        <title>Da Meet by Codegrain | Dashboard</title>
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
      <div className="container__lg">
        <div className="split2">
          <Sidebar />
          <div>
            {!user && !isLoading && (
              <section>
                <div className="split">
                  <div className="flow-content">
                    <h1>Hi, Stranger 👋</h1>
                    <h5>Pls login to access the event!</h5>
                    <a href="/api/auth/login" className="btn large-space">
                      Log me in!!!
                    </a>
                  </div>
                </div>
              </section>
            )}
            {user && (
              <>
                <section className="small-space">
                  <div className="split">
                    <div className="flow-content">
                      {user && (
                        <h1>
                          Hi,{" "}
                          {user.name.includes("@") ? user.nickname : user.name}
                          👋
                        </h1>
                      )}
                      <h5>Welcome to the club!!</h5>
                      <p>
                        Everything you need is here on the platform. Checkout
                        speakers, schedule or join the chat, all from one page.
                        Go to mainstage to see current live session.
                      </p>
                      <Link href="/mainstage">
                        <a className="btn small-space">Go to Mainstage</a>
                      </Link>
                    </div>
                    <Image
                      quality={100}
                      src="/img/header.svg"
                      width={294}
                      height={363}
                      alt="abstract"
                    ></Image>
                  </div>
                </section>
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
              </>
            )}
            <div className="margin-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
