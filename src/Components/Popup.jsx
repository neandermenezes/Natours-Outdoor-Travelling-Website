import React from "react";

import imgEight from "../img/nat-8.jpg";
import imgNine from "../img/nat-9.jpg";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={imgEight} alt="nat8" className="popup__img" />
            <img src={imgNine} alt="nat9" className="popup__img" />
          </div>
          <div className="popup__right">
            <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatem aliquam porro totam in eaque at nisi similique, ea
              facilis tempora quasi voluptate! Inventore repellat asperiores
              sequi nulla exercitationem autem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatem aliquam porro totam in eaque at nisi similique, ea
              facilis tempora quasi voluptate! Inventore repellat asperiores
              sequi nulla exercitationem autem?
            </p>
            <a href="#" className="btn btn--green">Book now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
