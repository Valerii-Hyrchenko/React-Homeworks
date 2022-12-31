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
import { PopupNewsBtn } from "../Components/GeneralUI/PopupNewsBtn";
import { BurgerMenuBtn } from "../Components/GeneralUI/BurgerMenuBtn";
import styled from "styled-components";
import { useState } from "react";

import showNewsIcon from "../assets/icons/show_news/show_news.svg";

const GeneralPageFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LeftBarContainer = styled.div`
  max-width: 188px;

  @media (max-width: 1080px) {
    display: ${(props) => (props.isBurgerCheckboxChecked ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 10px;
    z-index: 4;
    background-color: rgb(234, 241, 254);
    padding: 10px 30px 30px;
    border-radius: 15px;
    box-shadow: 0px 3px 20px 6px rgba(0, 0, 0, 0.75);

    animation-name: "menu";
    animation-duration: 800ms;
    transition-timing-function: ease-in-out;

    @keyframes menu {
      0% {
        transform: translateX(-500px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const GeneralUIContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  border-radius: 40px;
  background-color: #fff;
  padding: 50px 55px 21px 60px;
  position: relative;

  @media (max-width: 740px) {
    padding: 50px 30px 21px 50px;
  }

  @media (max-width: 580px) {
    max-width: 320px;
  }

  @media (max-width: 475px) {
    padding: 50px 25px 21px 35px;
  }

  @media (max-width: 410px) {
    padding: 50px 25px 21px 35px;
  }

  @media (max-width: 410px) {
    max-width: 290px;
    padding-left: 20px;
  }

  @media (max-width: 360px) {
    padding: 50px 10px 21px 10px;
    max-width: 280px;
  }
`;

const TitleDishesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowNewsPopupContainer = styled.div`
  position: relative;
  text-align: right;
  display: none;
  margin-top: -80px;

  & > div:first-of-type {
    position: absolute;
    right: 3px;

    @media (max-width: 580px) {
      right: -10px;
      top: -33px;
    }

    @media (max-width: 360px) {
      right: 19px;
      top: -36px;
    }
  }

  & > div:last-of-type {
    top: 65px;

    @media (max-width: 740px) {
      top: 50px;
    }

    @media (max-width: 580px) {
      right: -15px;
      top: 16px;
    }

    @media (max-width: 360px) {
      right: 10px;
    }
  }

  @media (max-width: 1410px) {
    display: block;
  }
`;

const ShowNewsBtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShowNewsTitle = styled.p`
  font-size: 16px;
  font-weight: 900;
  width: 100px;
  margin: 10px 10px 0 0;
  color: #2d9cdb;

  @media (max-width: 740px) {
    font-size: 12px;
    margin: 0 5px 0 0;
  }
`;

const MenuDishesContainer = styled.div`
  max-width: 675px;
  margin-right: 71px;

  @media (max-width: 1410px) {
    max-width: 885px;
    margin-right: 0;
  }

  @media (max-width: 410px) {
    max-width: 290px;
  }
`;

const BasketInPromotionWrap = styled.div`
  position: relative;
  z-index: 1;
  @media (max-width: 1410px) {
    display: none;
  }
`;

const PromotionContainer = styled.div`
  max-width: 259px;

  @media (max-width: 1410px) {
    display: none;

    ${(props) =>
      props.isNewsCheckboxChecked &&
      `
      display: block;
      position: absolute;
      top: 54px;
      right: 51px;
      background-color: #fff;
      z-index: 5;
      box-shadow: 0px 3px 20px 6px rgba(0,0,0,0.75);
      border-radius: 15px;
      padding: 0 25px 20px;

      animation-name: "news";
      animation-duration: 800ms;
      transition-timing-function: ease-in-out;

      @media (max-width: 740px) {
        top: 43px;
        right: 19px;
      }

      @media (max-width: 580px) {
        top: 10px;
        right: 0;
      }

      @keyframes news {
        0% {
          transform: translateX(500px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
  }
  `}
  }
`;

export const GeneralPage = () => {
  const [isNewsCheckboxChecked, setIsNewsCheckboxChecked] = useState(false);
  const [isBurgerCheckboxChecked, setIsBurgerCheckboxChecked] = useState(false);

  return (
    <GeneralPageFlexWrapper>
      <LeftBarContainer isBurgerCheckboxChecked={isBurgerCheckboxChecked}>
        <Avatar />
        <Menu />
        <SignOutFromApp />
        <FasterDelivery />
      </LeftBarContainer>
      <GeneralUIContainer>
        <MenuDishesContainer>
          <BurgerMenuBtn
            isBurgerCheckboxChecked={isBurgerCheckboxChecked}
            setIsBurgerCheckboxChecked={setIsBurgerCheckboxChecked}
          />
          <TitleDishesWrapper>
            <Title />
            <ShowNewsPopupContainer>
              <ShowNewsBtnContainer>
                <ShowNewsTitle>Press! See more news</ShowNewsTitle>
                <PopupNewsBtn
                  setIsNewsCheckboxChecked={setIsNewsCheckboxChecked}
                  isNewsCheckboxChecked={isNewsCheckboxChecked}
                  animateIcon={showNewsIcon}
                />
              </ShowNewsBtnContainer>
              <BasketAndSearch />
            </ShowNewsPopupContainer>
          </TitleDishesWrapper>
          <MenuDishes />
          <DishesItems />
        </MenuDishesContainer>
        <PromotionContainer isNewsCheckboxChecked={isNewsCheckboxChecked}>
          <BasketInPromotionWrap>
            <BasketAndSearch />
          </BasketInPromotionWrap>
          <Promotion />
          <News />
        </PromotionContainer>
      </GeneralUIContainer>
    </GeneralPageFlexWrapper>
  );
};
