import styled from "styled-components";
import flyingBurger from "../../assets/img/burger_fly/burger_fly.svg";
import grapes from "../../assets/img/images_for_design/grapes.svg";

const LoaderWrapper = styled.div`
  position: relative;
  max-width: 750px;
  margin: 0 auto;
  padding: 250px 0 339px;
`;

const LoaderTitle = styled.h2`
  font-weight: 800;
  font-size: 72px;
  line-height: 65px;
  text-align: center;
`;

const ImagesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation-name: "fruitRotation";
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
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
`;

const GrapesImg = styled.img`
  position: absolute;
  bottom: 160px;
  left: 40px;
`;

const LoaderText = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 55px;
  text-align: center;
  margin-top: 28px;
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
