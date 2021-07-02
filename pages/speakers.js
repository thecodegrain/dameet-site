import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Speakers = () => {
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
                <h1>Our Speakers</h1>
                <h5>Best from the industry</h5>
              </div>
            </section>
            <div className="speaker-cards small-space">
              <div className="speaker-card__single a-self bg-light">
                <Image
                  quality={100}
                  src="/img/speaker-01.jpg"
                  width={220}
                  height={220}
                  alt="speaker"
                />
                <h5>Saish G.</h5>
                <p>UX Designer</p>
              </div>
              <div className="speaker-card__single a-self bg-light">
                <Image
                  quality={100}
                  src="/img/speaker-02.jpg"
                  width={220}
                  height={220}
                  alt="speaker"
                />
                <h5>Digvijay Rathore</h5>
                <p>Web Developer & AI</p>
              </div>
              <div className="speaker-card__single a-self bg-light">
                <Image
                  quality={100}
                  src="/img/speaker-03.jpg"
                  width={220}
                  height={220}
                  alt="speaker"
                />
                <h5>Stacey</h5>
                <p>Motion Designer</p>
              </div>
              <div className="speaker-card__single a-self bg-light">
                <Image
                  quality={100}
                  src="/img/speaker-04.jpg"
                  width={220}
                  height={220}
                  alt="speaker"
                />
                <h5>Coming soon</h5>
                <p>coming soon</p>
              </div>
            </div>
            <section>
              <div className="info-grid small-space">
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
              </div>
            </section>
            <div className="margin-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;
