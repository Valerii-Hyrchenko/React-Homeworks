import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectGroup } from "../../redux/actions";
import { menuDishesConfig } from "../allConfigsConst";

const MenuDishesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 46px;
`;

const DishContainer = styled.div`
  width: 100px;
  height: 160px;
  position: relative;
  margin-right: 12px;
  background-color: ${(props) => (props.active ? "#FFF" : "#f3f3f3")};
  border-radius: 60px;
  box-shadow: ${(props) =>
    props.active ? "0px 4px 46px rgba(0, 0, 0, 0.1)" : ""};
  transition: all 200ms linear;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
    ${DishTitle}{
      color: #000000;
      font-size: 18px;
      transition: all 200ms linear;
    }
  `}
`;

const DishImg = styled.img`
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DishTitle = styled.p`
  position: absolute;
  bottom: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 14px;
  color: #585858;
  transition: all 200ms linear;
`;

export const MenuDishes = () => {
  const [activeDishGroup, setActiveDishGroup] = useState(menuDishesConfig[0]); //передай в компонент DishesItems
  const dispatch = useDispatch();
  const handleChangeActiveDish = (item) => {
    setActiveDishGroup(item);
    dispatch(selectGroup(item.title));
  };
  return (
    <MenuDishesWrapper>
      {menuDishesConfig.map((item) => (
        <DishContainer
          key={item.id}
          onClick={() => handleChangeActiveDish(item)}
          active={item.id === activeDishGroup.id}
        >
          <DishImg src={item.img} alt={`${item.title}-img`} />
          <DishTitle>{item.title}</DishTitle>
        </DishContainer>
      ))}
    </MenuDishesWrapper>
  );
};
