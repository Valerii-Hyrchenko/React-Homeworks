import styled from "styled-components";
import { BasketProcessing } from "./BasketProcessing";
import searchIcon from "../../assets/icons/basket/search_icon.svg";
import basketIcon from "../../assets/icons/basket/basket-icon.svg";
import { showBasket } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const BasketFlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 5;
`;

const SearchWrapper = styled.div`
  padding: 16px;
  background: #f3f3f3;
  border-radius: 15px;
  margin-right: 20px;
  cursor: pointer;
`;

const SearchImg = styled.img``;

const BasketWrapper = styled.div`
  padding: 16px;
  background: #666666;
  border-radius: 15px;
  cursor: pointer;
`;

const BasketImg = styled.img``;

export const BasketAndSearch = () => {
  const dispatch = useDispatch();
  const isBasketShow = useSelector((state) => state.isBasketShow.isShow);

  return (
    <BasketFlexContainer>
      <SearchWrapper>
        <SearchImg src={searchIcon} alt="search-icon" />
      </SearchWrapper>
      <BasketWrapper onClick={() => dispatch(showBasket())}>
        <BasketImg src={basketIcon} alt="basket-icon" />
      </BasketWrapper>
      {isBasketShow ? <BasketProcessing /> : null}
    </BasketFlexContainer>
  );
};
