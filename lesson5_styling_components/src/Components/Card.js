import React, { useState } from "react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { CardMenu } from "./CardMenu";
import { CardStats } from "./CardStats";
import { Box } from "@mui/system";
import { ClickAwayListener } from "@mui/material";

export const Card = ({ selectedCard }) => {
    const {
        card_type: cardType,
        name,
        date_valid: dateValid,
        card_number: cardNumber,
        cvv_number: cvvNumber,
    } = selectedCard;

    const [ openMenu, setOpenMenu ] = useState(false);
    const [ activeSide, setActiveSide ] = useState("front");
    const [ flipStyleFront, setFlipStyleFront ] = useState(null);
    const [ flipStyleBack, setFlipStyleBack ] = useState(null);
    const [ isCardNumberShow, setIsCardNumberShow ] = useState(false);
    const [ isRenderStats, setIsRenderStats ] = useState(false);

    const getDataToFront = () => {
        const convertCardNumber = () => {
            const numberArr =[];
            let numberOrder
            cardNumber.length > 13 ? numberOrder = 4 : numberOrder = 3;
            if (isCardNumberShow) {
                for (let i = 0; i <= cardNumber.length; i=i+numberOrder) {
                    if (i >= 9) numberOrder = 4;
                    numberArr.push(cardNumber.slice(i, (i + numberOrder)))
                }
            } else {
                numberArr.push(cardNumber.slice((cardNumber.length - 4)));
                for (let i = 1; i < Math.floor(cardNumber.length / numberOrder); i++) {
                    numberArr.unshift("*".repeat(numberOrder));
                }
            }
            return numberArr.join(" ");
        }
    
        const dataToFront = {
            cardType,
            name: name.toUpperCase(),
            cardNumber: convertCardNumber(),
            isCardNumberShow,
        };
    
        return dataToFront;
    }

    const getDataToBack = () => {
        const dataToBack = {
            cardType,
            cvvNumber: cvvNumber,
            dataValid: `${dateValid.slice(3, 6)}${dateValid.slice(8)}`,
        };
        return dataToBack;
    }
    
    const flipCard = () => {
        activeSide === "front" ? setActiveSide("back") : setActiveSide("front");
        if (activeSide === "front") {
            setFlipStyleFront ({ transform: "rotateY(180deg)" });
            setFlipStyleBack ({ transform: "rotateY(0deg)" });
        } else {
            setFlipStyleFront ({ transform: "rotateY(0deg)" });
            setFlipStyleBack ({ transform: "rotateY(180deg)" });
        }
    }
    
    const viewCardNumber = () => isCardNumberShow ? setIsCardNumberShow(false) : setIsCardNumberShow(true);

    const viewStats = () => {
        setOpenMenu(false);
        setIsRenderStats((prev) => !prev);
    }

    const getStyleCardContainer = () => {
        let height = isRenderStats ? 202 : 334;
        let style = {
            width: 534,
            height: height,
            margin: "0 auto",
            borderRadius: "49px",
            cursor: "pointer",
            position:"relative",
            zIndex: 1000,
        }
        return style;
    }

    const handleMenuClickAway = () => setOpenMenu(false);
    
    const handleMenuClick = () => setOpenMenu((prev) => !prev);
    
    return (
        <ClickAwayListener onClickAway={handleMenuClickAway}>
            <Box sx={{ position: 'relative' }}>
                <Box onClick={handleMenuClick} sx={getStyleCardContainer()}>
                    <CardFront
                    cardData={getDataToFront()}
                    flipStyle={flipStyleFront}
                    isRenderStats={isRenderStats}
                    />

                    <CardBack
                    cardData={getDataToBack()}
                    flipStyle={flipStyleBack}
                    isRenderStats={isRenderStats}
                    />
                </Box>

                {openMenu ? <CardMenu
                    flipCard={ flipCard }
                    viewCardNumber = { viewCardNumber }
                    isCardNumberShow = { isCardNumberShow }
                    viewStats = { viewStats }
                    /> : null}
                {isRenderStats ? <CardStats/> : null}
            </Box>
        </ClickAwayListener>
    )
}