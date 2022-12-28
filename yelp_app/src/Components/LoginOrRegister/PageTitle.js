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
`;

const EmojiImg = styled.img`
  margin: 0 -85px -20px 0;
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
