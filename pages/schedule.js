import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Schedule = () => {
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
        <section className="small-space">
          <div className="container">
            <div className="flow-content">
              <h1>Event Agenda</h1>
              <h5>Plan your schedule!!</h5>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="split">
            <div className="flow-content flow-content--large bg-light event-card">
              <div>
                <h3 className="text-center">July 17, 21</h3>
                <h4 className="small-space">
                  Session 1: Title and speaker name
                </h4>
                <p>Category | 4: 30 PM</p>
              </div>
              <div>
                <h4>Session 2: Title and speaker name</h4>
                <p>Category | 6: 30 PM</p>
              </div>
            </div>
            <div className="flow-content flow-content--large  bg-light event-card">
              <div>
                <h3 className="text-center">July 18, 21</h3>
                <h4 className="small-space">
                  Session 1: Title and speaker name
                </h4>
                <p>Category | 4: 30 PM</p>
              </div>
              <div>
                <h4>Session 2: Title and speaker name</h4>
                <p>Category | 6: 30 PM</p>
              </div>
            </div>
          </div>
          <section className="split small-space">
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
          </section>
        </div>
      </div>
    </>
  );
};

export default Schedule;
