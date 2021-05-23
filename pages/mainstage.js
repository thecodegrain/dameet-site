import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AuthContext from "../stores/authContext";

const Mainstage = () => {
  const { user, authReady } = useContext(AuthContext);
  const [webinar, setWebinar] = useState(null);
  const [error, setError] = useState(null);

  //Auth stuff
  const { user: username, login } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/webinar",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        // .then((res) => {
        //   if (!res.ok) {
        //     throw Error("You must be logged in to view this content");
        //   }
        //   return res.json();
        // })
        .then(() => {
          setWebinar(true);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setWebinar(null);
        });
    }
  }, [user, authReady]);
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
      <Sidebar />
      <div className="margin-left">
        <div className="container">
          <div className=" container flow-content large-space">
            {!authReady && <div>Loading...</div>}
            {error && (
              <div className="error">
                <p>{error}</p>
              </div>
            )}
          </div>
          {!user && (
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
          )}
          {user && (
            <>
              <div className="split">
                <div className="flow-content flow-content--large bg-light event-card">
                  <div>
                    {/* <video src="/" width={400} height={400}></video> */}
                    <div className="iframe-container__video">
                      <iframe
                        className="iframe-video"
                        src="https://www.youtube.com/embed/ZLHmaMG5SB0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <section className="split">
                <div className="flow-content flow-content--large bg-light event-card">
                  <h2>AD MAYBE</h2>
                </div>
                <div className="flow-content flow-content--large bg-light event-card">
                  <div className="iframe-container__chat">
                    <iframe
                      frameborder="0"
                      src="https://www.youtube.com/live_chat?v=ZLHmaMG5SB0&embed_domain=dameet.netlify.app"
                    ></iframe>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mainstage;
