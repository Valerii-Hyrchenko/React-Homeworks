import styled from "styled-components";
import emoji from "../../assets/img/emoji/emoji-title.svg";

const TitleWrapper = styled.div``;

const Title = styled.h2`
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  max-width: 320px;
  margin: 0 auto;

  @media (max-width: 950px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 550px) {
    font-size: 34px;
    line-height: 45px;
    max-width: 300px;
  }
`;

const EmojiImg = styled.img`
  margin: 0 -85px -20px 0;

  @media (max-width: 950px) {
    max-width: 52px;
  }

  @media (max-width: 550px) {
    max-width: 45px;
    margin: 0 -55px -15px 0;
  }
`;

export const PageTitle = () => {
  return (
    <TitleWrapper>
      <Title>
        Welcome To Yelp App <EmojiImg src={emoji} alt="emoji-icon" />
      </Title>
    </TitleWrapper>
  );
};
