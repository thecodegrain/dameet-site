import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import AuthContext from "../stores/authContext";

const Mainstage = () => {
  const { user, authReady, login } = useContext(AuthContext);

  return (
    <>
      <div className="margin-left">
        <Head>
          <html lang="en" />
          <title>Da Meet by Codegrain | Webinar</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            content="Da meet, The ultimate design conference experience by Codegrain"
            name="description"
          />
        </Head>
        <Sidebar />
        <div className="container">
          <div className="flow-content small-space">
            {!authReady && <div>Loading...</div>}
          </div>
          {!user && (
            <section>
              <div className="split">
                <div className="flow-content">
                  <h1>Hi, Stranger 👋</h1>
                  <h5>Pls login to access the event!</h5>
                  <a className="btn large-space" onClick={login}>
                    Log me in!!!
                  </a>
                </div>
                <Image
                  quality={100}
                  src="/img/hero.png"
                  width={294}
                  height={363}
                  alt="abstract"
                ></Image>
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
                      <div className="iframe-container__video">
                        <iframe
                          className="iframe-video"
                          src="https://www.youtube.com/embed/T2Q2hP3F7L4"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="info-grid">
                <div className="flow-content bg-light event-card a-self__start">
                  <h2>Session Info</h2>
                  <div>
                    <h3 className="text-center">July 18, 21</h3>
                    <h4 className="small-space text-center">
                      Session 1: Title and speaker name
                    </h4>
                    <p className="text-center">Category | 4: 30 PM</p>
                  </div>
                </div>
                <div className="flow-content flow-content--large bg-light padding-chat">
                  <div className="iframe-container__chat">
                    <iframe
                      className="iframe-chat"
                      frameborder="0"
                      src="https://www.youtube.com/live_chat?v=T2Q2hP3F7L4&embed_domain=dameet.netlify.app&is_popout=1&v=T2Q2hP3F7L4"
                    ></iframe>
                  </div>
                </div>
              </section>
            </>
          )}
          <div className="margin-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Mainstage;
