import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import RailwayServices from '../../components/RailwayServices/RailwayServices';
import styles from './Home.module.css';
import './slick.css';

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
      <RailwayServices />

      <section className={styles.faqAndNews}>
        <div className={styles.faq}>
          <Slider {...settings}>
            <div className={styles.slide}>
              <h3> How do I book a train ticket on this website?</h3>
              <p>
                To book a train ticket on this website, simply go to the booking
                section, select your desired train, fill in the required
                details,and check availability.
              </p>
            </div>
            <div className={styles.slide}>
              <h3>Register or Login</h3>
              <p>Register or login to create your profile and then proceed</p>
            </div>
            <div className={styles.slide}>
              <h3>Available Trains</h3>
              <p>
                Check the list of available trains and after choosing required
                seat and other facility,reserve your seat accordingly.
              </p>
            </div>
            <div className={styles.slide}>
              <h3>Fill out Information</h3>
              <p>
                Fill out required Information in reservation input fields and
                make payment.
              </p>
            </div>
            <div className={styles.slide}>
              <h3>Reservation Done</h3>
              <p>
                After successfully reservation of seat,Passenger will receive
                receipt or booking message through Mobile SMS.
              </p>
            </div>
            <div className={styles.slide}>
              <h3>Congratulations!</h3>
              <p>
                Congratulations!!You have successfully Booked your seat.Now pack
                the bags and enjoy journey
              </p>
            </div>
          </Slider>
        </div>
        <div className={styles.news}>
          <h2>Latest News</h2>
          <ul>
            <li>
              <a href="/">Rajdhani Express late by 30min</a>
            </li>
            <li>
              <a href="/">
                Increasing Covid19 cases led some trains to be cancelled
              </a>
            </li>
            <li>
              <a href="/">Accident of train due to heavy rain</a>
            </li>
            <li>
              <a href="/">Narendre modi to inaugurate vande bharat express</a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
export default Home;
