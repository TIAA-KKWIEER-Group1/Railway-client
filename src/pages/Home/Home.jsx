import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className={styles.Home}>
      <Banner />

      <section className={styles.allInformation}>
        <div className={styles.informationContainer}>
          <div className={styles.information}>
            <h2>Safety Guidelines</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              possimus vel magnam qui beatae quidem excepturi velit eligendi non
            </p>
          </div>
          <div className={styles.information}>
            <h2>Safety Guidelines</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              possimus vel magnam qui beatae quidem excepturi velit eligendi non
            </p>
          </div>
          <div className={styles.information}>
            <h2>Safety Guidelines</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              possimus vel magnam qui beatae quidem excepturi velit eligendi non
            </p>
          </div>
          <div className={styles.information}>
            <h2>Safety Guidelines</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              possimus vel magnam qui beatae quidem excepturi velit eligendi non
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqAndNews}>
        <div className={styles.faq}>
          <Slider {...settings}>
            <div className={styles.slide}>
              <h3> How do I book a train ticket on this website?</h3>
              <p>
                To book a train ticket on this website, simply go to the booking
                section, select your desired train, fill in the required
                details, and make the payment. You will receive a confirmation
                message and email once the booking is complete.
              </p>
            </div>
            <div className={styles.slide}>
              <h3>2</h3>
              <p></p>
            </div>
            <div className={styles.slide}>
              <h3>3</h3>
              <p></p>
            </div>
            <div className={styles.slide}>
              <h3>4</h3>
              <p></p>
            </div>
            <div className={styles.slide}>
              <h3>5</h3>
              <p></p>
            </div>
            <div className={styles.slide}>
              <h3>6</h3>
              <p></p>
            </div>
          </Slider>
        </div>
        <div className={styles.news}>
          <h2>News</h2>
          <ul>
            <li>
              <a href="/">Hello</a>
            </li>
            <li>
              <a href="/">Hello</a>
            </li>
            <li>
              <a href="/">Hello</a>
            </li>
            <li>
              <a href="/">Hello</a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
export default Home;
