import { ImagesForDesign } from "../Components/LoginOrRegister/ImagesForDesign";
import { PageTitle } from "../Components/LoginOrRegister/PageTitle";
import { Form } from "../Components/LoginOrRegister/Form";
import styled from "styled-components";

const LoginContentContainer = styled.div`
  padding: 48px 0 195px;
  position: relative;
`;

export const LoginPage = () => {
  return (
    <LoginContentContainer>
      <ImagesForDesign />
      <PageTitle />
      <Form pageType="login" />
    </LoginContentContainer>
  );
};
