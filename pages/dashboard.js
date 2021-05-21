import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AuthContext from "../stores/authContext";

const Webinar = () => {
  const { user, authReady } = useContext(AuthContext);
  const [webinar, setWebinar] = useState(null);
  const [error, setError] = useState(null);

  //Auth stuff
  const { user: username, login } = useContext(AuthContext);

  // useEffect(() => {
  //   if (authReady) {
  //     fetch(
  //       "/.netlify/functions/webinar",
  //       user && {
  //         headers: {
  //           Authorization: "Bearer " + user.token.access_token,
  //         },
  //       }
  //     )
  //       // .then((res) => {
  //       //   if (!res.ok) {
  //       //     throw Error("You must be logged in to view this content");
  //       //   }
  //       //   return res.json();
  //       // })
  //       .then(() => {
  //         setWebinar(true);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setWebinar(null);
  //       });
  //   }
  // }, [user, authReady]);

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
          <div className="flow-content large-space">
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
                <div className="flow-content">
                  {user && <h1>Hi, {username.user_metadata.full_name} 👋</h1>}
                  <h5>Welcome to the club!!</h5>
                  <p>
                    Everything you need is here on the platform. Checkout
                    speakers, schedule or join the chat, all from one page. Go
                    to mainstage to see current live session.
                  </p>
                  <Link href="/mainstage">
                    <a className="btn small-space">Go to Mainstage</a>
                  </Link>
                </div>
                <Image
                  quality={100}
                  src="/img/hero.png"
                  width={294}
                  height={363}
                  alt="abstract"
                ></Image>
              </div>
              <section className="small-space">
                <div className="split">
                  <div className="split info-cards bg-light">
                    <div>
                      <h4>Plan out your event schedule</h4>
                      <Link href="/schedule">
                        <a className="btn small-space">View agenda</a>
                      </Link>
                    </div>
                    <Image
                      src="/img/Group3.png"
                      width={150}
                      height={150}
                      quality={100}
                    ></Image>
                  </div>
                  <div className="split info-cards bg-light">
                    <div>
                      <h4>Discover our speakers line-up</h4>
                      <Link href="/speakers">
                        <a className="btn small-space">View speakers</a>
                      </Link>
                    </div>
                    <Image
                      src="/img/Group2.png"
                      width={150}
                      height={150}
                      quality={100}
                    ></Image>
                  </div>
                </div>
                <div className="split small-space">
                  <div className="split info-cards bg-light">
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
                      src="/img/Group2.png"
                      width={150}
                      height={150}
                      quality={100}
                    ></Image>
                  </div>
                  <div className="split info-cards bg-light">
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
                      src="/img/Group3.png"
                      width={150}
                      height={150}
                      quality={100}
                    ></Image>
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

export default Webinar;
