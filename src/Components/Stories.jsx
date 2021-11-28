import React from "react";

import natEight from "../img/nat-8.jpg";
import natNine from "../img/nat-9.jpg";

import videoBackground from "../img/video.mp4";
import mobilevideoBackground from "../img/video.webm";

class Stories extends React.Component {
  render() {
    return (
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={videoBackground} type="video/mp4"/>
            <source src={mobilevideoBackground} type="video/webm"/>
            Your browser is not supported! Use google chrome..
          </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">We make people genuinely happy</h2>
        </div>

        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={natEight} alt="Person in a tour" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              eius accusantium accusamus dolore natus nobis reiciendis culpa
              suscipit quam? Similique distinctio optio cupiditate voluptas
              delectus id at eum odio vel. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Molestias maiores aut non placeat.
            </p>
          </div>
        </div>

        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={natNine} alt="Person in a tour" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now.
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              eius accusantium accusamus dolore natus nobis reiciendis culpa
              suscipit quam? Similique distinctio optio cupiditate voluptas
              delectus id at eum odio vel. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Molestias maiores aut non placeat.
            </p>
          </div>
        </div>

        <div className="u-center-text">
            <a href="#" className="btn-text">Read all stories &rarr;</a>
        </div>
      </section>
    );
  }
}

export default Stories;
