import Head from "next/head";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Sidebar from "../components/Sidebar";

const Mainstage = () => {
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Head>
        <html lang="en" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="googlebot" content="index,follow" />
        <title>Da Meet by Codegrain | Mainstage</title>
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
            <div className="flow-content small-space">
              {isLoading && <div>Loading...</div>}
            </div>
            {!user && (
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
                      <div>
                        {/* <video src="/" width={400} height={400}></video> */}
                        <div className="iframe-container__video bg-light event-card">
                          {/* <iframe
                            className="iframe-video"
                            src="https://www.youtube.com/embed/T2Q2hP3F7L4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe> */}
                          <h2>No live sessions</h2>
                          <p>Join back later</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="info-grid">
                  <div className="flow-content event-card a-self__start">
                    <h2>Session Info</h2>
                    <div>
                      <h3>July 17, 21</h3>
                      <h4 className="small-space">
                        Session 1: Will be announced soon!
                      </h4>
                      <p>Category | 4: 30 PM</p>
                      <div>
                        <a className="btn small-space">Session notes</a>
                      </div>
                    </div>
                  </div>
                  <div className="flow-content flow-content--large bg-light padding-chat">
                    <div className="iframe-container__chat">
                      {/* <iframe
                        className="iframe-chat"
                        frameborder="0"
                        src="https://www.youtube.com/live_chat?v=T2Q2hP3F7L4&embed_domain=dameet.netlify.app&is_popout=1&v=T2Q2hP3F7L4"
                      ></iframe> */}
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

export default Mainstage;
