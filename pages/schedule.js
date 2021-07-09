import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Schedule = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Da Meet by Codegrain</title>
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
                  <h3 className="text-center">July 17</h3>
                  <div className="small-space a-self">
                    <Image
                      quality={100}
                      src="/img/speaker-2-alt.png"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                    <h4 className="small-space text-center">
                      Intro to Branding and Logo Designing
                    </h4>
                    <p className="text-center">
                      Shubhang Rajput |{" "}
                      <span className="bold">3:00-4:30 PM</span>
                    </p>
                  </div>
                </div>
                <div className="a-self">
                  <Image
                    quality={100}
                    src="/img/speaker-5-alt.png"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    Show your work: Get discovered and fly high as a developer
                  </h4>
                  <p className="text-center">
                    Cris Pintea | <span className="bold">5:00-6:00 PM</span>
                  </p>
                </div>
                <div className="a-self">
                  <Image
                    quality={100}
                    src="/img/speaker-4-alt.png"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    Intro to App Development
                  </h4>
                  <p className="text-center">
                    Roshan Singh | <span className="bold">6:30-8:00 PM</span>
                  </p>
                </div>
                <div className="a-self">
                  <Image
                    quality={100}
                    src="/img/collab.png"
                    width={325}
                    height={200}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    How & Why to start a side gig early on?
                  </h4>
                  <p className="text-center">
                    Shubhang + Roshan |{" "}
                    <span className="bold">8:15-9:00 PM</span>
                  </p>
                </div>
              </div>
              <div className="flow-content flow-content--large  bg-light event-card">
                <div className="a-self">
                  <h3 className="text-center">July 18</h3>
                  <div className="small-space a-self">
                    <Image
                      quality={100}
                      src="/img/speaker-3-alt.png"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                    <h4 className="small-space text-center">
                      Web Development Basics
                    </h4>
                    <p className="text-center">
                      Janvi Poojary | <span className="bold">3:00-4:30 PM</span>
                    </p>
                  </div>
                </div>
                <div className="a-self">
                  <Image
                    quality={100}
                    src="/img/speaker-6-alt.png"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    How to get clients as a freelancer/beginner?
                  </h4>
                  <p className="text-center">
                    Pranjal Doorwar | <span className="bold">5:00-6:30 PM</span>
                  </p>
                </div>
                <div className="a-self">
                  <Image
                    quality={100}
                    src="/img/speaker-01-alt.png"
                    width={220}
                    height={220}
                    alt="speaker"
                  />
                  <h4 className="small-space text-center">
                    Intro to User Experience
                  </h4>
                  <p className="text-center">
                    Saish Gosavi | <span className="bold">7:00-8:30 PM</span>
                  </p>
                </div>
              </div>
            </div>
            <section className="info-grid small-space">
              <div className="info-card-row info-cards bg-light">
                <div>
                  <h4>Be part of our community on discord</h4>
                  <a
                    href="https://discord.gg/ZYpp89Vx6f"
                    className="btn small-space"
                    target="_blank"
                  >
                    Join now
                  </a>
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
                  <a
                    href="https://telegram.me/dameet"
                    className="btn small-space"
                    target="_blank"
                  >
                    Hop in
                  </a>
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
