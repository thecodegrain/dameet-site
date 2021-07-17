import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";

const Mainstage = () => {
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
                <div className="split small-space">
                  <div className="flow-content">
                    <div>
                      <div className="iframe-container__video">
                        <iframe
                          className="iframe-video"
                          src="https://www.youtube.com/embed/zCVx3jsR-mY" //replace the code after /embed
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ! Replace this part */}

                <section className="info-grid">
                  <div className="flow-content  a-self__start">
                    <h3>Intro to Branding and Logo Designing</h3>
                    <div>
                      <h4>By Shubhang Rajput</h4>
                      <h5> July 17, 21 | 3: 00 PM (IST)</h5>
                      <div>
                        <a
                          href="https://codegrainpublic.notion.site/Intro-to-Branding-and-Logo-Designing-ec72d8b9b52e4431855f609873fea018"
                          target="_blank"
                          className="btn small-space"
                        >
                          Session notes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flow-content flow-content--large"
                    style={{
                      border: "#858080 solid 1px",
                      borderRadius: "var(--br)",
                    }}
                  >
                    <div className="iframe-container__chat">
                      <iframe
                        className="iframe-chat"
                        frameborder="0"
                        src="https://www.youtube.com/live_chat?v=zCVx3jsR-mY&embed_domain=dameet.codegra.in&is_popout=1&v=toqDjKgU_Wc"
                      ></iframe>
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
