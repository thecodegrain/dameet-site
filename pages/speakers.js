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
            <section
              id="speaker1"
              className="small-space speaker-card-detail bg-light"
            >
              <div className="speaker-cards-detail">
                <div className="speaker-card__single-detail">
                  <div className="speaker-img">
                    <Image
                      quality={100}
                      src="/img/speaker-01.jpg"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                  </div>
                  <div>
                    <h2>Saish Gosavi</h2>
                    <p>
                      I am UX Designer working in the Fintech domain at Groww
                      Banglore, India. My main work at Groww is to make the
                      investment journey simple for Millenials. I believe in one
                      simple principle on design is that "Design is Everywhere".
                      In my free time, I love being in the midst of nature,
                      doing random experiments at room and reading about brain
                      science.
                    </p>
                    <div className="small-space">
                      <div className="social-links">
                        <a
                          href="https://www.instagram.com/designneuron/"
                          className="underline"
                          target="_blank"
                        >
                          ig
                        </a>
                        <a
                          href="https://saishdesign.website/"
                          className="underline"
                          target="_blank"
                        >
                          site
                        </a>
                      </div>
                      <div className=" small-space">
                        <a href="#" className="btn">
                          Session notes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="speaker2"
              className="small-space speaker-card-detail bg-light"
            >
              <div className="speaker-cards-detail">
                <div className="speaker-card__single-detail">
                  <div className="speaker-img">
                    <Image
                      quality={100}
                      src="/img/speaker-02.jpg"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                  </div>
                  <div>
                    <h2>Shubhang Rajput</h2>
                    <p>
                      Shubhang is a self taught designer, with an engineering
                      background. Good design to him is something which not only
                      solves a problem but also looks good while at it. Apart
                      from designing, he also enjoys teaching and sharing
                      whatever he has learned from his experiences in the
                      industry so far. He has been a Mentor and Judge for
                      various workshops and competitions well.
                    </p>
                    <div className="small-space">
                      <div className="social-links">
                        <a
                          href="https://www.instagram.com/matereal_designs/"
                          className="underline"
                          target="_blank"
                        >
                          ig
                        </a>
                        <a
                          href="https://www.behance.net/materealdesigns"
                          className="underline"
                          target="_blank"
                        >
                          Bē
                        </a>
                      </div>
                      <div className=" small-space">
                        <a href="#" className="btn">
                          Session notes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="speaker3"
              className="small-space speaker-card-detail bg-light"
            >
              <div className="speaker-cards-detail">
                <div className="speaker-card__single-detail">
                  <div className="speaker-img">
                    <Image
                      quality={100}
                      src="/img/speaker-03.jpg"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                  </div>
                  <div>
                    <h2>Janvi Poojary</h2>
                    <p>
                      I am freelance Web developer from a non-technical
                      background. I am pursuing Bachelors of Commerce from KJ
                      Somaiya College, Mumbai. From being a commerce student to
                      be in IT field there was lots of ups and downs but it was
                      worth it. Apart from experimenting with new technologies,
                      I mentor students and I love teaching them. I am
                      passionate about Web Development and strive to better
                      myself as a developer and the development community as a
                      whole that's why I create content on Instagram to provide
                      quality value to budding developers.
                    </p>
                    <div className="small-space">
                      <div className="social-links">
                        <a
                          href="https://www.instagram.com/janvi.codes/"
                          className="underline"
                          target="_blank"
                        >
                          ig
                        </a>
                      </div>
                      <div className=" small-space">
                        <a href="#" className="btn">
                          Session notes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="speaker4"
              className="small-space speaker-card-detail bg-light"
            >
              <div className="speaker-cards-detail">
                <div className="speaker-card__single-detail">
                  <div className="speaker-img">
                    <Image
                      quality={100}
                      src="/img/speaker-04.jpg"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                  </div>
                  <div>
                    <h2>Roshan Singh</h2>
                    <p>
                      Roshan is an autodidact mobile app developer who is
                      passionate about design. He is presently working with a
                      number of firms in India, providing customized mobile
                      solutions to businesses in the fintech, food and beverage,
                      and educational sector. Aside from programming, he enjoys
                      open sourcing and sharing the majority of what he has
                      learnt over the last six years.
                    </p>
                    <div className="small-space">
                      <div className="social-links">
                        <a
                          href="https://www.instagram.com/thisisroshans/"
                          className="underline"
                          target="_blank"
                        >
                          ig
                        </a>
                        <a
                          href="https://twitter.com/thisisroshans"
                          className="underline"
                          target="_blank"
                        >
                          tw
                        </a>
                        <a
                          href="https://sweetsbyroshan.github.io/"
                          className="underline"
                          target="_blank"
                        >
                          site
                        </a>
                      </div>
                      <div className=" small-space">
                        <a href="#" className="btn">
                          Session notes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="speaker5"
              className="small-space speaker-card-detail bg-light"
            >
              <div className="speaker-cards-detail">
                <div className="speaker-card__single-detail">
                  <div className="speaker-img">
                    <Image
                      quality={100}
                      src="/img/speaker-05.jpg"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                  </div>
                  <div>
                    <h2>Cris Pintea</h2>
                    <p>
                      I’m Cris Pintea, a freelance full-stack software developer
                      currently based in Turin, Italy. I started falling in love
                      with software development at 8yo and sold my first
                      full-stack website at 14 for 1k euros to a Scottish
                      startup (PHP backend, jQuery frontend, MySQL database). In
                      my free time, besides hiking mountain peaks, I work on my
                      own projects, some of which have received substantial VC
                      funding in the past.
                    </p>
                    <div className="small-space">
                      <div className="social-links">
                        <a
                          href="https://www.instagram.com/cris.pintea/"
                          className="underline"
                          target="_blank"
                        >
                          ig
                        </a>
                        <a
                          href="https://pintea.net/"
                          className="underline"
                          target="_blank"
                        >
                          site
                        </a>
                      </div>
                      <div className=" small-space">
                        <a href="#" className="btn">
                          Session notes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
           <section
              id="speaker6"
              className="small-space speaker-card-detail bg-light"
            >
              <div className="speaker-cards-detail">
                <div className="speaker-card__single-detail">
                  <div className="speaker-img">
                    <Image
                      quality={100}
                      src="/img/speaker-06.jpg"
                      width={220}
                      height={220}
                      alt="speaker"
                    />
                  </div>
                  <div>
                    <h2>Pranjal Doorwar</h2>
                    <p>
                       I am an Engineer doing freelance Development. I have worked on 25+ projects from 4 countries. I have a keen interest in design. From sitting in a corporate interview to hiring people, I have been on both sides.
                    </p>
                    <div className="small-space">
                      <div className="social-links">
                        <a
                          href="https://www.instagram.com/pranjal_doorwar/"
                          className="underline"
                          target="_blank"
                        >
                          ig
                        </a>
                        <a
                          href="https://twitter.com/pranjal_doorwar"
                          className="underline"
                          target="_blank"
                        >
                          tw
                        </a>
                        <a
                          href="https://pranjaldoorwar.com/"
                          className="underline"
                          target="_blank"
                        >
                          site
                        </a>
                      </div>
                      <div className=" small-space">
                        <a href="#" className="btn">
                          Session notes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
