import { ImagesForDesign } from "../Components/LoginOrRegister/ImagesForDesign";
import { PageTitle } from "../Components/LoginOrRegister/PageTitle";
import { Form } from "../Components/LoginOrRegister/Form";
import styled from "styled-components";

const LoginContentContainer = styled.div`
  padding: 48px 0 105px;
  position: relative;

  @media (max-width: 950px) {
    padding: 28px 0 35px;
  }

  @media (max-width: 950px) {
    padding: 28px 0 35px;
  }
`;

export const RegisterPage = () => {
  return (
    <LoginContentContainer>
      <ImagesForDesign />
      <PageTitle />
      <Form pageType="register" />
    </LoginContentContainer>
  );
};
