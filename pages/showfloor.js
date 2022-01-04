import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { useUser } from "@auth0/nextjs-auth0";
import Loading from "../components/Loading";
import UserNotLoggedIn from "../components/UserNotLoggedIn";

const ShowFloor = () => {
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

      <div className="container__lg">
        <div className="split2">
          <Sidebar />
          {!user && !isLoading && <UserNotLoggedIn />}
          {user && (
            <div>
              <section className="small-space">
                <div className="flow-content">
                  <h1>Showfloor</h1>
                  <h5>
                    Featuring our partners and exclusive offers just for you.
                  </h5>
                </div>
              </section>
              <div className="split">
                <div className="flow-content flow-content--large bg-light event-card">
                  <div className="a-self">
                    <div className="small-space a-self">
                      <Image
                        quality={100}
                        src="/img/stream.png"
                        width={220}
                        height={220}
                        alt="speaker"
                      />
                      <h4 className="small-space text-center">
                        Our Streaming Partner - StreamYard
                      </h4>
                      <p className="text-center">
                        The easiest way to create professional live streams
                      </p>
                      <a
                        href="https://streamyard.com/"
                        className="btn small-space"
                        target="_blank"
                      >
                        Check them out
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flow-content flow-content--large bg-light event-card">
                  <div className="small-space a-self">
                    <Image
                      quality={100}
                      src="/img/ebook.jpg"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                    <h4 className="small-space text-center">
                      UI Design Tactics - Thalion
                    </h4>
                    <p className="text-center">
                      Use coupon code "dameet" for 50% off on the ebook.
                    </p>
                    <a
                      href="https://thalion.gumroad.com/l/ui-design-tactics/dameet"
                      target="_blank"
                      className="btn small-space"
                    >
                      Check it out
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="flow-content flow-content--large bg-light event-card small-space">
              <div className="a-self">
                <Image
                  quality={100}
                  src="/img/stream.png"
                  width={220}
                  height={220}
                  alt="speaker"
                />
                <h4 className="text-center">
                  Alair 3D Assets by Youn Lo Giudice
                </h4>
                <p className="text-center">
                  "Alair" is a 3D asset package with a joyful and modern touch.
                </p>
                <a
                  href="https://youndesign.gumroad.com/l/alair3d"
                  target="_blank"
                  className="btn small-space"
                >
                  Check it out
                </a>
              </div>
            </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="margin-bottom"></div>
    </>
  );
};

export default ShowFloor;
