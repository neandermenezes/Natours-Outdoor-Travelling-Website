import React from "react";

import natOne from '../img/nat-1-large.jpg'
import natTwo from '../img/nat-2-large.jpg'
import natThree from '../img/nat-3-large.jpg'

class About extends React.Component {
  render() {
    return (
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventorous people
          </h2>
        </div>
        <div className="flex-row">
          <div className="flex-col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You-re going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ex
              commodi quod ipsam consectetur recusandae eius voluptatibus qui
              cumque mollitia, saepe, placeat non. Labore debitis ipsum iusto
              cupiditate, at quos!
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis vitae inventore quo iure totam necessitatibus hic
              repellat possimus quis nihil ratione voluptates, recusandae
              quisquam, voluptate ab quos. Ad, iusto molestias!
            </p>

            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="flex-col-1-of-2">
            <div className="composition">
              <img
                src={ natOne }
                alt="nat 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={ natTwo }
                alt="nat 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={ natThree }
                alt="nat 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
