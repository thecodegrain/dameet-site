import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Speakers = () => {
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
        <section className="small-space">
          <div className="container">
            <div className="flow-content">
              <h1>Our Speakers</h1>
              <h5>Best from the industry</h5>
            </div>
          </div>
        </section>
        <div className="speaker-cards large-space">
          <div className="speaker-card__single a-self bg-light">
            <Image
              quality={100}
              src="/img/speaker-01.jpg"
              width={220}
              height={220}
              alt="speaker"
            />
            <h5>Manan Gouhari</h5>
            <p>Web Developer</p>
          </div>
          <div className="speaker-card__single a-self bg-light">
            <Image
              quality={100}
              src="/img/speaker-02.jpg"
              width={220}
              height={220}
              alt="speaker"
            />
            <h5>Shubhang Rajput</h5>
            <p>Graphic Designer</p>
          </div>
          <div className="speaker-card__single a-self bg-light">
            <Image
              quality={100}
              src="/img/speaker-03.jpg"
              width={220}
              height={220}
              alt="speaker"
            />
            <h5>Pulp Smith</h5>
            <p>Productive Ninja</p>
          </div>
          <div className="speaker-card__single a-self bg-light">
            <Image
              quality={100}
              src="/img/speaker-04.jpg"
              width={220}
              height={220}
              alt="speaker"
            />
            <h5>Rahul Mane</h5>
            <p>Crypto Expert</p>
          </div>
        </div>
        <div className="container">
          <section>
            <div className="info-grid small-space">
              <div className="info-card-row info-cards bg-light">
                <div>
                  <h4>Be part of our community on discord</h4>
                  <a className="btn small-space">Join now</a>
                </div>
                <Image
                  src="/img/Group2.png"
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
                  src="/img/Group3.png"
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
    </>
  );
};

export default Speakers;
