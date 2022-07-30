import React from 'react';
import {Banner, Strip} from '../../components.js';
import ColLayout from '../../components/ColLayout.js';

function Services() {
  return (
    <div className="App">

      <Banner num={1} height={300} top={'60%'}>
        <h1>About Us</h1>
      </Banner>

      <Strip center={true}>
        <h1>Cheryl Stuart Cosmetics</h1>
        <p>located at david j. witchell, newtown</p>
        <p>Contact us to purchase gift certificates!</p>
      </Strip>
      <Strip>
        <ColLayout>
          <div>
            <div>
              <h2>LET’S COLOR</h2>
              <p>One of our talented artists will help you choose new products, and colors for your personal needs. After your consultation you will receive a color by number face chart that will no doubt make you an artist yourself!</p>
              <p>Complimentary with a minimum of $65.00 in cosmetic purchases</p>
            </div>
            <div>
              <h2>LET’S COLOR</h2>
              <p>One of our talented artists will help you choose new products, and colors for your personal needs. After your consultation you will receive a color by number face chart that will no doubt make you an artist yourself!</p>
              <p>Complimentary with a minimum of $65.00 in cosmetic purchases</p>
            </div>
            <div>
              <h2>LET’S COLOR</h2>
              <p>One of our talented artists will help you choose new products, and colors for your personal needs. After your consultation you will receive a color by number face chart that will no doubt make you an artist yourself!</p>
              <p>Complimentary with a minimum of $65.00 in cosmetic purchases</p>
            </div>
          </div>
          <div>
            <div>
              <h2>LET’S COLOR</h2>
              <p>One of our talented artists will help you choose new products, and colors for your personal needs. After your consultation you will receive a color by number face chart that will no doubt make you an artist yourself!</p>
              <p>Complimentary with a minimum of $65.00 in cosmetic purchases</p>
            </div>
            <div>
              <h2>LET’S COLOR</h2>
              <p>One of our talented artists will help you choose new products, and colors for your personal needs. After your consultation you will receive a color by number face chart that will no doubt make you an artist yourself!</p>
              <p>Complimentary with a minimum of $65.00 in cosmetic purchases</p>
            </div>
            <div>
              <h2>LET’S COLOR</h2>
              <p>One of our talented artists will help you choose new products, and colors for your personal needs. After your consultation you will receive a color by number face chart that will no doubt make you an artist yourself!</p>
              <p>Complimentary with a minimum of $65.00 in cosmetic purchases</p>
            </div>
          </div>
        </ColLayout>
      </Strip>

      </div>
  );
}

export default Services;
