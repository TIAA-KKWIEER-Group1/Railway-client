import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Home.module.css';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (index < 2) {
      // 2 is the number of items in the carousel
      setIndex(index + 1);
    }
  };
  return (
    <div>
      <div className={styles.backContainer}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.homeCard}>
          <h2 className={styles.cardHeading}>Railway Reservation </h2>
          <label className={styles.lab}>Date</label>
          <input
            type="text"
            name="destination"
            id="destination"
            className={styles.destination}
            placeholder="DD/MM/YYYY "
          />

          <div className={styles.formRow}>
            <div className={styles.formCol}>
              <label for="input-1" className={styles.lab}>
                Source
              </label>
              <select
                className="select form-select form-select-md mb-3 ml-8 w-40 "
                aria-label=".form-select-lg example"
              >
                <option selected className={styles.options}>
                  hello
                </option>
                <option value="1" className={styles.options}>
                  One
                </option>
                <option value="2" className={styles.options}>
                  Two
                </option>
                <option value="3" className={styles.options}>
                  Three
                </option>
              </select>
            </div>
            <div className={styles.formCol}>
              <label for="input-2" className={styles.lab}>
                Destination
              </label>
              <select
                className="form-select form-select-mg mb-3 w-35"
                aria-label=".form-select-lg example"
              >
                <option selected className={styles.options}>
                  hello
                </option>
                <option value="1" className={styles.options}>
                  One
                </option>
                <option value="2" className={styles.options}>
                  Two
                </option>
                <option value="3" className={styles.options}>
                  Three
                </option>
              </select>
            </div>
            <button className={styles.blueButton}>Check Availability</button>
          </div>
        </div>
        <div className={styles.homeInfo}>
          <h1 className={styles.headingHome}>
            MAKE YOUR <br /> RESERVATION
          </h1>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, felis in vulputate malesuada, orci tellus porta tellus,
            vitae euismod risus purus sit amet enim.
          </p>
        </div>
      </div>
      <section>
        <div>
          <div className={styles.services}>
            <div className={styles.row}>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardBody}>
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="icon-pencil primary font-large-2 float-left"></i>
                        </div>
                        <div className="media-body text-right">
                          <h3 className={styles.cardTitle}>
                            Safety GuideLines
                          </h3>
                          <span className={styles.cardText}>
                            Stay Safe, Travel Smart: Follow these safety
                            guidelines to ensure a safe and enjoyable train
                            journey
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardBody}>
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="icon-speech warning font-large-2 float-left"></i>
                        </div>
                        <div className="media-body text-right">
                          <h3 className={styles.cardTitle}>
                            Pantry Cart Services
                          </h3>
                          <span className={styles.cardText}>
                            Enjoy delicious meals on the go with our pantry
                            services the perfect accompaniment for your train
                            travel adventure
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={`${styles.card} ${styles.serviceCard}`}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardBody}>
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="icon-graph success font-large-2 float-left"></i>
                        </div>
                        <div className="media-body text-right">
                          <h3 className={styles.cardTitle}>
                            Emergency Contact Information
                          </h3>
                          <span className={styles.cardText}>
                            Stay Safe and Secure with Our Emergency Services -
                            Always Ready to Help You
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.body}>
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="icon-graph success font-large-2 float-left"></i>
                        </div>
                        <div className="media-body text-right">
                          <h3 className={styles.cardTitle}>
                            Emergency Contact Information
                          </h3>
                          <span className={styles.cardText}>
                            Stay Safe and Secure with Our Emergency Services -
                            Always Ready to Help You
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="FaQs">
          <div class="row" activeIndex={index} onSelect={handleSelect}>
            <div class="col-md-7">
              <Carousel variant="dark">
                <Carousel.Item>
                  <div class="card-carausal">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="align-self-center">
                            <i class="icon-speech warning font-large-2 float-center"></i>
                          </div>
                          <div class="media-body text-right">
                            <h3 class="carausal-card-title">
                              How do I book a train ticket on this website?
                            </h3>
                            <p class="carausal-card-text">
                              To book a train ticket on this website, simply go
                              to the booking section, select your desired train,
                              fill in the required details, and make the
                              payment. You will receive a confirmation message
                              and email once the booking is complete.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="card-carausal">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="align-self-center">
                            <i class="icon-speech warning font-large-2 float-center"></i>
                          </div>
                          <div class="media-body text-right">
                            <h3 class="carausal-card-title">
                              What information do I need to provide to book a
                              train ticket?
                            </h3>
                            <p class="carausal-card-text">
                              To book a train ticket, you will need to provide
                              your departure and arrival locations, travel
                              dates, passenger details, and any other
                              preferences, such as seat selection and food
                              options.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="card-carausal">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="align-self-center">
                            <i class="icon-speech warning font-large-2 float-center"></i>
                          </div>
                          <div class="media-body text-right">
                            <h3 class="carausal-card-title">
                              How can I pay for my train ticket booking?
                            </h3>
                            <p class="carausal-card-text">
                              This website accepts multiple modes of payment,
                              such as credit/debit cards, net banking, and
                              mobile wallets. Select your preferred mode of
                              payment during the booking process and follow the
                              instructions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div class="col-md-5">
              <div class="side-card">
                <div class="card-content">
                  <div class="card-body">
                    <div class="media d-flex">
                      <div class="align-self-center">
                        <i class="icon-speech warning font-large-2 float-center"></i>
                      </div>
                      <div class="media-body text-right">
                        <h3 class="side-card-title">News</h3>
                        <p class="side-card-text">
                          <ul>
                            <li>Hello</li>
                            <li>Hello</li>
                            <li>Hello</li>
                            <li>Hello</li>
                            <li>Hello</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
export default Home;
