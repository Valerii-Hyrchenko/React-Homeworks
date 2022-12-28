import styled from "styled-components";
import man from "../../assets/img/delivery/delivery-man.svg";
import arrow from "../../assets/img/delivery/arrow.svg";

const DeliveryWrap = styled.div`
  max-width: 184px;
  position: relative;
  margin-top: 125px;
`;

const DeliveryManImg = styled.img`
  position: absolute;
  bottom: 48px;
  left: 0;
`;

const ContentContainer = styled.div`
  height: 62px;
  background-color: #fff;
  border-radius: 25px;
  padding: 88px 12px 12px 26px;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
`;

const Arrow = styled.img``;

export const FasterDelivery = () => {
  return (
    <DeliveryWrap>
      <DeliveryManImg src={man} alt="delivery-man" />
      <ContentContainer>
        <Title>Faster delivery!</Title>
        <FlexContainer>
          <Text>Know More</Text>
          <Arrow src={arrow} alt="delivery-arrow" />
        </FlexContainer>
      </ContentContainer>
    </DeliveryWrap>
  );
};