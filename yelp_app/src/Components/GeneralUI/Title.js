import styled from "styled-components";
import emoji from "../../assets/img/emoji/emoji-title.svg";

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const TitleUI = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
  max-width: 320px;
`;

const EmojiImg = styled.img`
  margin: 0 0 -18px 4px;
`;

export const Title = () => {
  return (
    <TitleContainer>
      <TitleUI>
        Welcome To Lucknow
        <EmojiImg src={emoji} alt="title-emoji" />
      </TitleUI>
    </TitleContainer>
  );
};
