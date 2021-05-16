import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Home() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Da Meet by Codegrain | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          content="Da meet, The ultimate design conference experience by Codegrain"
          name="description"
        />
      </Head>

      {/* INTRO SECTION */}
      <section className="intro eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content flow-content--large large-space">
              <div>
                <p className="h4">00-00 July 21</p>
                <h1>The ultimate design conference experience. ✌</h1>
              </div>

              <a className="btn" onClick={login}>
                Secure a Spot
              </a>
            </div>
            <div>
              <Image
                src="/img/hero.png"
                width={587}
                height={726}
                alt="abstract"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}

      <section className="eq-space card-section bg-light">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>
                <span className="bg-accent accent-bg">Ambitious</span> creatives
                coming together virtually.
              </h2>
              <p>
                For our third year running, Frontrow is more than a conference.
                It's an experience that brings the most talented & passionate
                creatives in the world together, virtually.
              </p>

              <a className="btn large-space" onClick={login}>
                Sign up now
              </a>
            </div>
            <div>
              <Image
                src="/img/second.png"
                width={500}
                height={414}
                alt="instagram stories"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section some icons and shit */}
      <section className="eq-space">
        <div className="container">
          <div className="split text-center">
            <div>
              <Image src="/img/logo1.png" width={250} height={250}></Image>
              <h3>Learn</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                dicta?
              </p>
            </div>
            <div>
              <Image src="/img/logo2.png" width={250} height={250}></Image>
              <h3>Execute</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, soluta?
              </p>
            </div>
            <div>
              <Image src="/img/logo3.png" width={250} height={250}></Image>
              <h3>Discover</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                dignissimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker SECTION */}

      <section className="eq-space card-section bg-light">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>
                Our <span className="bg-accent accent-bg">2021</span> Speakers
              </h2>
              <p>We have shakers of the industry</p>
            </div>
            <div className="a-self__end">
              <a className="btn" onClick={login}>
                Secure a Spot
              </a>
            </div>
          </div>
          <div className="speaker-cards large-space">
            <div className="speaker-card__single a-self">
              <Image
                src="/img/speaker-01.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5 className="">Manan Gouhari</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image
                src="/img/speaker-02.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Hardy Smith</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image
                src="/img/speaker-03.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Shubhang Rajput</h5>
              <p>Lead Developer</p>
            </div>
            <div className="speaker-card__single a-self">
              <Image
                src="/img/speaker-04.jpg"
                width={220}
                height={220}
                alt="speaker"
              />
              <h5>Rahul Mane</h5>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOURTH SECTION */}
      <section className="eq-space">
        <div className="container">
          <div className="split">
            <div className="flow-content">
              <h2>Frequently Asked Questions. 🤔 </h2>

              <div className="flow-content flow-content--large">
                <div class="accordion">
                  <input type="radio" id="1" name="accordion" checked />
                  <label class="accordion-section" for="1">
                    <h4 class="accordion-header">Accordion Section 1</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Sed posuere consectetur est at lobortis. Nullam quis risus
                      eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </p>
                  </label>
                  <input type="radio" id="2" name="accordion" />
                  <label class="accordion-section" for="2">
                    <h4 class="accordion-header">Accordion Section 2</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Sed posuere consectetur est at lobortis. Nullam quis risus
                      eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </p>
                  </label>
                  <input type="radio" id="3" name="accordion" />
                  <label class="accordion-section" for="3">
                    <h4 class="accordion-header">Accordion Section 3</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Sed posuere consectetur est at lobortis. Nullam quis risus
                      eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </p>
                  </label>
                  <input type="radio" id="4" name="accordion" />
                  <label class="accordion-section" for="4">
                    <h4 class="accordion-header">Accordion Section 4</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Sed posuere consectetur est at lobortis. Nullam quis risus
                      eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </p>
                  </label>
                  <input type="radio" id="5" name="accordion" />
                  <label class="accordion-section" for="5">
                    <h4 class="accordion-header">Accordion Section 5</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Sed posuere consectetur est at lobortis. Nullam quis risus
                      eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </p>
                  </label>
                  <input type="radio" id="6" name="accordion" />
                  <label class="accordion-section" for="6">
                    <h4 class="accordion-header">Accordion Section 6</h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Sed posuere consectetur est at lobortis. Nullam quis risus
                      eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </p>
                  </label>
                </div>

                <a className="btn large-space" onClick={login}>
                  Secure a Spot
                </a>
              </div>
            </div>
            <div className="vertical-center">
              <Image
                src="/img/second.png"
                width={500}
                height={414}
                alt="instgram stories"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
