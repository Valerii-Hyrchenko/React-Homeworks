import styled from "styled-components";
import flyingBurger from "../../assets/img/burger_fly/burger_fly.svg";
import grapes from "../../assets/img/images_for_design/grapes.svg";

const LoaderWrapper = styled.div`
  position: relative;
  max-width: 750px;
  margin: 0 auto;
  padding: 307px 0 339px;

  @media (max-width: 850px) {
    max-width: 380px;
    padding: 290px 0 250px;
  }

  @media (max-width: 550px) {
    max-width: 300px;
  }
`;

const LoaderTitle = styled.h2`
  font-weight: 800;
  font-size: 72px;
  text-align: center;

  @media (max-width: 850px) {
    font-size: 56px;
  }

  @media (max-width: 550px) {
    font-size: 44px;
  }
`;

const ImagesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation-name: "fruitRotation";
  animation-duration: 3000ms;
  /* animation-iteration-count: infinite; */
  transition-timing-function: ease-in-out;

  @keyframes fruitRotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FlyingBurgerImg = styled.img`
  position: absolute;
  top: 35px;
  right: 7px;

  @media (max-width: 850px) {
    max-width: 250px;
    top: 123px;
    right: -83px;
  }

  @media (max-width: 550px) {
    right: -70px;
  }

  @media (max-width: 440px) {
    top: 105px;
    right: -10px;
  }
`;

const GrapesImg = styled.img`
  position: absolute;
  bottom: 160px;
  left: 40px;

  @media (max-width: 850px) {
    max-width: 168px;
    bottom: 108px;
    left: -43px;
  }

  @media (max-width: 550px) {
    left: -13px;
    bottom: 100px;
  }

  @media (max-width: 440px) {
    left: 25px;
  }
`;

const LoaderText = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 55px;
  text-align: center;
  margin-top: 15px;

  @media (max-width: 850px) {
    font-size: 20px;
    margin-top: 5px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ImagesWrapper>
        <FlyingBurgerImg src={flyingBurger} alt="flying-burger-img" />
        <GrapesImg src={grapes} alt="grapes-img" />
      </ImagesWrapper>
      <LoaderTitle>Yelp App</LoaderTitle>
      <LoaderText>developed by Valerii Hyrchenko</LoaderText>
    </LoaderWrapper>
  );
};
