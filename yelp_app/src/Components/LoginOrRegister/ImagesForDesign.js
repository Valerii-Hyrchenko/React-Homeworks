import redAppleImg from "../../assets/img/images_for_design/red_apple.svg";
import yellowAppleImg from "../../assets/img/images_for_design/yellow_apple.svg";
import leaf from "../../assets/img/images_for_design/leaf.svg";
import grapes from "../../assets/img/images_for_design/grapes.svg";
import styled from "styled-components";

const ImagesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
const RedApple = styled.img`
  position: absolute;
  bottom: 35px;
  left: 44px;
`;
const YellowApple = styled.img`
  position: absolute;
  bottom: -54px;
  right: -51px;
`;
const Leaf = styled.img`
  position: absolute;
  top: -54px;
  right: -61px;
`;
const Grapes = styled.img`
  position: absolute;
  top: -52px;
  left: -36px;
`;

export const ImagesForDesign = () => {
  return (
    <ImagesWrapper>
      <Grapes src={grapes} alt="grapes-img" />
      <Leaf src={leaf} alt="leaf-img" />
      <YellowApple src={yellowAppleImg} alt="yellow-apple-img" />
      <RedApple src={redAppleImg} alt="red-appleI-img" />
    </ImagesWrapper>
  );
};
