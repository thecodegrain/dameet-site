import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

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
        .then((res) => {
          if (!res.ok) {
            throw Error("You must be logged in to view this content");
          }
          return res.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setGuides(null);
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
      <div className="guides">
        <div className="container flow-content xl-space">
          {!authReady && <div>Loading...</div>}
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
          {guides &&
            guides.map((guide) => (
              <section className="small-space">
                <div
                  key={guide.title}
                  className="bg-light card-section split eq-space"
                >
                  <div className="container">
                    <div className="flow-content">
                      <h3>{guide.title}</h3>
                      <h4>Written by {guide.author}</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sunt eum quasi mollitia impedit qui voluptatum
                        temporibus blanditiis ratione, dolor saepe beatae illum
                        eius cupiditate? Aperiam rerum sint quod enim vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
        </div>
      </div>
    </>
  );
}
