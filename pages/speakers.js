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
      </div>
    </>
  );
};

export default Speakers;
