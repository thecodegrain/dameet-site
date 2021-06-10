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
      <div className="container__lg">
        <div className="split2">
          <Sidebar />
          <div>
            <section className="small-space">
              <div className="flow-content">
                <h1>Event Agenda</h1>
                <h5>Plan your schedule!!</h5>
              </div>
            </section>
            <div className="split">
              <div className="flow-content flow-content--large bg-light event-card">
                <div className="a-self">
                  <h3 className="text-center">July 17, 21</h3>
                  <Image
                    quality={100}
                    src="/img/speaker-01.jpg"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    Session 1: Title and speaker name
                  </h4>
                  <p className="text-center">Category | 4: 30 PM</p>
                </div>
                <div className="a-self">
                  <Image
                    quality={100}
                    src="/img/speaker-02.jpg"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    Session 2: Title and speaker name
                  </h4>
                  <p className="text-center">Category | 6: 30 PM</p>
                </div>
              </div>
              <div className="flow-content flow-content--large  bg-light event-card">
                <div className="a-self">
                  <h3 className="text-center">July 18, 21</h3>
                  <Image
                    quality={100}
                    src="/img/speaker-03.jpg"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    Session 1: Title and speaker name
                  </h4>
                  <p className="text-center">Category | 4: 30 PM</p>
                </div>
                <div className="a-self">
                  <Image
                    quality={100}
                    src="/img/speaker-04.jpg"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    Session 2: Title and speaker name
                  </h4>
                  <p className="text-center">Category | 6: 30 PM</p>
                </div>
              </div>
            </div>
            <section className="info-grid small-space">
              <div className="info-card-row info-cards bg-light">
                <div>
                  <h4>Be part of our community on discord</h4>
                  <a className="btn small-space">Join now</a>
                </div>
                <Image
                  src="/img/discord.svg"
                  width={150}
                  height={150}
                  quality={100}
                ></Image>
              </div>
              <div className="info-card-row info-cards bg-light">
                <div>
                  <h4>Or join the chat on telegram</h4>
                  <a className="btn small-space">Hop in</a>
                </div>
                <Image
                  src="/img/telegram.svg"
                  width={150}
                  height={150}
                  quality={100}
                ></Image>
              </div>
            </section>
            <div className="margin-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
