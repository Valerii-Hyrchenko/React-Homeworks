import React from "react"
import { Box } from '@mui/material';

export const CardFront = ({ flipStyle, cardData, isRenderStats }) => {
    const { name, cardNumber, cardType } = cardData

    const getCurrentStyle = () => {
        let padding = "170px 53px 37px 57px";
        let backgroundColor = "transparent";
        let backgroundImage = `url("../assets/img/backgrounds/visa-card-frontbg.svg")`;
        if (cardType === "mastercard") backgroundImage = `url("../assets/img/backgrounds/master-card-frontbg.svg")`;
        if (isRenderStats) {
            padding = "46px 53px 29px 57px";
            backgroundColor = "#232343";
            backgroundImage = "none";
        }
        let style = {
            width: 424,
            padding: padding,
            borderRadius: "49px",
            backgroundColor: backgroundColor,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: backgroundImage,
            margin: "0 auto",
            position: "absolute",
            transition: "1000ms",
            backfaceVisibility: "hidden",
        }
        return style
    }

    return (
        <Box style={ flipStyle }
            sx={getCurrentStyle()}>
            <p style={{
                color: '#FFF',
                lineHeight: "36px",
            }}>{cardNumber}</p>
            
            <Box sx={{
                color: 'primary.main',
                fontSize: 24,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                lineHeight: "24px",
            }}>
                {cardType === "visa" ? <p>{name}</p> : <p style={{ fontSize: 22 }} >{name}</p>}
                <Box>
                    {cardType === "visa" ?
                    (<img src="../assets/img/icons/visa-icon.svg" alt="card-icon"/>) :
                    (<img style={{ margin: "22px 0" }} src="../assets/img/icons/master-icon.svg" alt="card-icon"/>) }
                </Box>
            </Box>
        </Box>
    )
}