import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AuthContext from "../stores/authContext";

const Webinar = () => {
  const { user, authReady } = useContext(AuthContext);
  const [webinar, setWebinar] = useState(null);
  const [error, setError] = useState(null);

  //Auth stuff
  const { user: username } = useContext(AuthContext);

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
          {user && (
            <section className="small-space">
              <div className="container">
                <div className="split ">
                  <div className="flow-content">
                    {user && <h1>Hi, {username.user_metadata.full_name} 👋</h1>}
                    <p>Welcome to the club!!</p>
                    <h5>
                      Everything you need is here on the platform. Checkout
                      speakers, schedule or join the chat, all from one page. Go
                      to mainstage to see current live session.
                    </h5>
                    <a className="btn small-space">Go to Mainstage</a>
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
        </div>
      </div>
    </>
  );
};

export default Webinar;
