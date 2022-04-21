import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const { isAuthenticated } = useAuth0();

  const showMessage = () => {
    alert("Sorry, you must Sign Up / Login to VOTE");
  };

  const openModal = e => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = e => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Voting app based on{" "}
              <span className="text-color-primary">Blockchain</span>
            </h1>
            <div className="container-xs">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  {isAuthenticated ? (
                    <Link to="/vote">
                      <Button tag="a" color="primary" wideMobile>
                        Vote
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/" onClick={showMessage}>
                      <Button tag="a" color="primary" wideMobile>
                        Vote
                      </Button>
                    </Link>
                  )}
                </ButtonGroup>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
