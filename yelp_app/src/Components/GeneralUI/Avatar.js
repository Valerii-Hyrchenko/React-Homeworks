import { useSelector } from "react-redux";
import styled from "styled-components";
import avatar from "../../assets/icons/avatar/avatar.svg";

const AvatarWrapper = styled.div`
  margin: 35px auto 42px;
`;

const ImgContainer = styled.div`
  padding: 8px;
  max-width: 76px;
  height: 77px;
  background-color: #fff;
  border-radius: 15px;
  margin: 0 auto;
  cursor: pointer;
`;

const Img = styled.img``;

const AvatarTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 13px;
  text-align: center;
`;

export const Avatar = () => {
  const currentAuthUser = useSelector(
    (state) => state.currentAuthUser.currentAuthUser
  );
  const { email } = currentAuthUser;

  return (
    <AvatarWrapper>
      <ImgContainer>
        <Img src={avatar} alt="avatar-img" />
      </ImgContainer>
      <AvatarTitle>{email}</AvatarTitle>
    </AvatarWrapper>
  );
};
