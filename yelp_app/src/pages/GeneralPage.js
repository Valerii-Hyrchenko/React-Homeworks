import { Menu } from "../Components/GeneralUI/Menu";
import { SignOutFromApp } from "../Components/GeneralUI/SignOutFromApp";
import { Avatar } from "../Components/GeneralUI/Avatar";
import { FasterDelivery } from "../Components/GeneralUI/FasterDelivery";
import { Title } from "../Components/GeneralUI/Title";
import { MenuDishes } from "../Components/GeneralUI/MenuDishes";
import { DishesItems } from "../Components/GeneralUI/DishesItems";
import { BasketAndSearch } from "../Components/GeneralUI/BasketAndSearch";
import { Promotion } from "../Components/GeneralUI/Promotion";
import { News } from "../Components/GeneralUI/News";
import styled from "styled-components";

const GeneralPageFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftBarContainer = styled.div`
  max-width: 188px;
`;

const GeneralUIContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  border-radius: 40px;
  background-color: #fff;
  padding: 50px 55px 21px 60px;
`;

const MenuDishesContainer = styled.div`
  max-width: 675px;
  margin-right: 71px;
`;

const PromotionContainer = styled.div`
  max-width: 259px;
`;

export const GeneralPage = () => {
  return (
    <GeneralPageFlexWrapper>
      <LeftBarContainer>
        <Avatar />
        <Menu />
        <SignOutFromApp />
        <FasterDelivery />
      </LeftBarContainer>
      <GeneralUIContainer>
        <MenuDishesContainer>
          <Title />
          <MenuDishes />
          <DishesItems />
        </MenuDishesContainer>
        <PromotionContainer>
          <BasketAndSearch />
          <Promotion />
          <News />
        </PromotionContainer>
      </GeneralUIContainer>
    </GeneralPageFlexWrapper>
  );
};
