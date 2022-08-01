import React from 'react';
import {Banner, Strip, Image} from '../components.js';
import ColLayout from '../components/ColLayout.js';

function Home() {
  return (
    <div className="App">

      <Banner num={1} height={300} top={'60%'}>
        <h1>About Us</h1>
      </Banner>

      <Strip>
          <ColLayout>
            <div>
              <h2>Who we are …</h2>
              <p>Founded in 2008, USB Medical is dedicated to developing strong, innovative, “first-to-market” I.P. in the medical device space, marketing patentable, physician preferred products that address complex medical needs in the field of cardiac and general surgery and patient care. We are a “patient-centric” organization driven by the Hippocratic Oath and focused on delivering solutions not products. The medical device market is fluid and dynamic, it demands that products and solutions improve the quality of patient care and deliver measurable results at fair value.</p>
            </div>
            <Image file="http://usb-medical.com/wp-content/uploads/2019/10/about_flipped.jpeg" />
          </ColLayout>
      </Strip>


      <Strip center={true} bg="lightgray">
            <h2>Meet Our Team</h2>
            <ColLayout>
              <div>
                <h3>Stephen Epstein</h3>
                <p>Managing Director</p>
                <hr />
                <p>Stephen Epstein has over thirty years’ experience in the medical field, and has held several sales and management positions with a history of successful results. In his position as managing director of USB, Stephen is focused on operations and product development.</p>
              </div>
              <div>
                <h3>Stephen Epstein</h3>
                <p>Managing Director</p>
                <hr />
                <p>Stephen Epstein has over thirty years’ experience in the medical field, and has held several sales and management positions with a history of successful results. In his position as managing director of USB, Stephen is focused on operations and product development.</p>
              </div>
              <div>
                <h3>Stephen Epstein</h3>
                <p>Managing Director</p>
                <hr />
                <p>Stephen Epstein has over thirty years’ experience in the medical field, and has held several sales and management positions with a history of successful results. In his position as managing director of USB, Stephen is focused on operations and product development.</p>
              </div>
              <div>
                <h3>Stephen Epstein</h3>
                <p>Managing Director</p>
                <hr />
                <p>Stephen Epstein has over thirty years’ experience in the medical field, and has held several sales and management positions with a history of successful results. In his position as managing director of USB, Stephen is focused on operations and product development.</p>
              </div>
            </ColLayout>
        </Strip>

      </div>
  );
}

export default Home;
