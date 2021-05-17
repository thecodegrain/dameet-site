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
          <div className="webinar">
            <div className=" container flow-content xl-space">
              {!authReady && <div>Loading...</div>}
              {error && (
                <div className="error">
                  <p>{error}</p>
                </div>
              )}
            </div>
            {!user && (
              <section className="small-space">
                <div className="container">
                  <div className="split ">
                    <div className="flow-content">
                      <h1>Hi, Stranger 👋</h1>
                      <h5>Pls login to access the event!</h5>
                      <a className="btn small-space" onClick={login}>
                        Log me in!!!
                      </a>
                    </div>
                    <div>
                      <Image
                        quality={100}
                        src="/img/hero.png"
                        width={294}
                        height={363}
                        alt="abstract"
                      ></Image>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {user && (
              <>
                <section className="small-space">
                  <div className="container">
                    <div className="split ">
                      <div className="flow-content">
                        {user && (
                          <h1>Hi, {username.user_metadata.full_name} 👋</h1>
                        )}
                        <h5>Welcome to the club!!</h5>
                        <p>
                          Everything you need is here on the platform. Checkout
                          speakers, schedule or join the chat, all from one
                          page. Go to mainstage to see current live session.
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
                  </div>
                </section>
                <section className="eq-space">
                  <div className="container">
                    <div className="split">
                      <div className="split info-cards bg-light">
                        <div>
                          <h3>Plan out your event schedule</h3>
                          <a className="btn small-space">View agenda</a>
                        </div>
                        <Image
                          src="/img/Group3.png"
                          width={300}
                          height={300}
                          quality={100}
                        ></Image>
                      </div>
                      <div className="split info-cards bg-light">
                        <div>
                          <h3>Discover our speakers line-up</h3>
                          <a className="btn small-space">View speakers</a>
                        </div>
                        <Image
                          src="/img/Group2.png"
                          width={300}
                          height={300}
                          quality={100}
                        ></Image>
                      </div>
                    </div>
                    <div className="split small-space">
                      <div className="split info-cards bg-light">
                        <div>
                          <h3>Be part of our community on discord</h3>
                          <a className="btn small-space">Join now</a>
                        </div>
                        <Image
                          src="/img/Group2.png"
                          width={300}
                          height={300}
                          quality={100}
                        ></Image>
                      </div>
                      <div className="split info-cards bg-light">
                        <div>
                          <h3>Or join the chat on telegram</h3>
                          <a className="btn small-space">Hop in</a>
                        </div>
                        <Image
                          src="/img/Group3.png"
                          width={300}
                          height={300}
                          quality={100}
                        ></Image>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
