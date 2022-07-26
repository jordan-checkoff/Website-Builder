import './App.css';
import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Logo from './components/Logo';
import Banner from './components/Banner';
import Strip from './components/Strip';
import Row from './components/Row';
import Col from './components/Col';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      
      <Header navbar={true} align={'top'} thin={true}>
        <div>
          <Logo />
          <p>FITNESS FOR LIFE</p>
        </div>
        <p>Call or text me at 215.200.7907 to schedule your free consultation today!</p>
      </Header>

      <Banner num={0} height={450} />

      <Strip thin={true} center={true}>
        <Row>
          <Col>
            <h1>GET FIT TODAY</h1>
            <p>WITH NEWTOWN PERSONAL FITNESS TRAINING</p>
            <p>No judgment. No strict diets. No arbitrary rules.</p>
            <p>Sheri Katz-Schnur of Newtown, Bucks County PA is a certified personal trainer with expertise in creating engaging and effective in-home workouts requiring little to no equipment. Whether your goal is weight loss, muscle gain, increased flexibility, or overall fitness, we will develop an individualized fitness program to help you reach your goals in the most convenient and comfortable setting for you.</p>
          </Col>
        </Row>
      </Strip>

      <Strip center={true}>
        <Row>
          <Col bg="beige">
            <h2>YOUR BODY, YOUR GOALS</h2>
            <p>We all want to feel stronger, healthier, and more energetic so we can do the things that bring us joy. We believe these goals are doable for anyone with a plan and someone to guide them. All you need to bring is a willingness to work!</p>
          </Col>
          <Col bg="rgb(249, 202, 109)">
            <h2>MY PROMISE</h2>
            <p>We will start our journey where you are today, creating a plan that works with your lifestyle and for your lifetime. Whatever your goals, whether you’re looking to tone up or to gain flexibility, whether you want to lose weight, just feel stronger and more confident, or all of the above, I'll help you get there, with attention to your unique needs.</p>
          </Col>
        </Row>
      </Strip>

      <Strip thin={true} center={true}>
        <Row>
          <Col>
            <h2>FEEDBACK</h2>
            <p>Real Experiences, Stunning Results</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image file={"https://www.freeiconspng.com/thumbs/quotation-icon/quotation-icon-20.png"} size="icon" />
            <p>Sheri is a great personal trainer. I never thought I would look forward to working out but I do, and it is because of her. She knows her stuff! She understands my limits and she knows when I can be pushed. I began with Sheri when I was almost a size 14 and now I am an 8! It is all thanks to her. We work out hard but we also discuss eating habits. She has truly turned my life around!</p>
            <p>Kim Q</p>
          </Col>
          <Col>
            <Image file={"https://www.freeiconspng.com/thumbs/quotation-icon/quotation-icon-20.png"} size="icon" />
            <p>Sheri Katz has changed my life. She took someone who hated to exercise (and was very lazy about it) and turned her into someone who exercises on a regular basis. The positive effect of her workouts was almost immediate. Even before the weight started coming off, I had more energy and endurance in my everyday life. Her sixth sense is amazing –she will push me to get results, yet she can sense when I have reached my limit without me saying a word.</p>
            <p>Tracy B</p>
          </Col>
        </Row>
      </Strip>

      </div>
  );
}

export default App;
