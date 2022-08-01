import React from 'react';
import {Banner, Strip, Image} from '../components.js';
import ColLayout from '../components/ColLayout.js';

const Page = () => {
  return (
    <div className="App">

      <Banner num={0} height={450} />

      <Strip center={true}>
          <h1>GET FIT TODAY</h1>
          <p>WITH NEWTOWN PERSONAL FITNESS TRAINING</p>
          <p>No judgment. No strict diets. No arbitrary rules.</p>
          <p>Sheri Katz-Schnur of Newtown, Bucks County PA is a certified personal trainer with expertise in creating engaging and effective in-home workouts requiring little to no equipment. Whether your goal is weight loss, muscle gain, increased flexibility, or overall fitness, we will develop an individualized fitness program to help you reach your goals in the most convenient and comfortable setting for you.</p>
      </Strip>

      <Strip width="wide" center={true}>
        <ColLayout bg={["rgb(246, 237, 206)", "rgb(254, 203, 99)"]}>
          <div>
            <h2>YOUR BODY, YOUR GOALS</h2>
            <p>We all want to feel stronger, healthier, and more energetic so we can do the things that bring us joy. We believe these goals are doable for anyone with a plan and someone to guide them. All you need to bring is a willingness to work!</p>
          </div>
          <div>
            <h2>MY PROMISE</h2>
            <p>We will start our journey where you are today, creating a plan that works with your lifestyle and for your lifetime. Whatever your goals, whether you’re looking to tone up or to gain flexibility, whether you want to lose weight, just feel stronger and more confident, or all of the above, I'll help you get there, with attention to your unique needs.</p>
          </div>
        </ColLayout>
      </Strip>

      <Strip center={true}>
            <h2>FEEDBACK</h2>
            <p>Real Experiences, Stunning Results</p>
            <ColLayout>
              <div>
                <Image file={"https://www.freeiconspng.com/thumbs/quotation-icon/quotation-icon-20.png"} size="icon" />
                <p>Sheri is a great personal trainer. I never thought I would look forward to working out but I do, and it is because of her. She knows her stuff! She understands my limits and she knows when I can be pushed. I began with Sheri when I was almost a size 14 and now I am an 8! It is all thanks to her. We work out hard but we also discuss eating habits. She has truly turned my life around!</p>
                <p>Kim Q</p>
              </div>
              <div>
                <Image file={"https://www.freeiconspng.com/thumbs/quotation-icon/quotation-icon-20.png"} size="icon" />
                <p>Sheri Katz has changed my life. She took someone who hated to exercise (and was very lazy about it) and turned her into someone who exercises on a regular basis. The positive effect of her workouts was almost immediate. Even before the weight started coming off, I had more energy and endurance in my everyday life. Her sixth sense is amazing –she will push me to get results, yet she can sense when I have reached my limit without me saying a word.</p>
                <p>Tracy B</p>
              </div>
            </ColLayout>
        </Strip>

      </div>
  );
}

export default Page;
