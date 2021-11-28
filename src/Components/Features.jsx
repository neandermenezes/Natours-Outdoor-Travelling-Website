import React from "react";
import "../css/icon-font.css";

class Features extends React.Component {
  render() {
    return (
      <section className="section-features">
        <div className="u-skew-7">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam nemo molestias, quisquam ratione autem et. Hic ut
              quaerat accusantium!
            </p>
          </div>

          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet nature
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam nemo molestias, quisquam ratione autem et. Hic ut
              quaerat accusantium!
            </p>
          </div>

          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam nemo molestias, quisquam ratione autem et. Hic ut
              quaerat accusantium!
            </p>
          </div>

          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live a healthier life
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam nemo molestias, quisquam ratione autem et. Hic ut
              quaerat accusantium!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
