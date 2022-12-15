import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CardsDataContext } from "../context/CardsDataProvider";

const CardsList = ({ getSelectedCard }) => {

    const [ cardsList, setCardsList ] = useState([]);
    const [ cardValue, setCardValue ] = useState("");

    const cardsContext = useContext(CardsDataContext);
    const { cardsData } = cardsContext

    const getCardList = () => {
        let cardsListArr =  cardsData.map((card) => `${card.card_type.toUpperCase()} №${card.card_number}`);
        return cardsListArr
    };

    useEffect(()=> {
        setCardsList(getCardList())
    }, [ cardsData ]);

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setCardValue(value);
        let selectedCard = cardsData.filter((card) => card.card_number === value.split("№")[1])[0];
        getSelectedCard(selectedCard);
    };


    return (
        <Box>
            <FormControl sx={{ margin: "0 76px 20px" }}>
                <InputLabel sx={{ fontSize: 22 }} id="select-card-label" >Select Card</InputLabel>
                <Select
                labelId="select-card-label"
                id="select-card"
                value={ cardValue }
                label="Select Card"
                onChange={handleSelectChange}
                style={{
                    width: 400,
                    fontSize: 22,
                    height: 50,
                }}
                >
                    {cardsList.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            style={{ fontSize: 22 }}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )

}

export default CardsList;