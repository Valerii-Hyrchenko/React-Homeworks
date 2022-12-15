import React from "react"
import { Box } from '@mui/material';

export const CardBack = ({ flipStyle, cardData, isRenderStats }) => {
    const { cvvNumber, dataValid, cardType } = cardData

    const getCurrentStyle = () => {
        let padding = "228px 57px 68px";
        let backgroundColor = "transparent";
        let backgroundImage = `url("../assets/img/backgrounds/visa-card-backbg.svg")`;
        if (cardType === "mastercard") backgroundImage = `url("../assets/img/backgrounds/master-card-backbg.svg")`;
        if (isRenderStats) {
            padding = "121px 53px 43px 57px";
            backgroundColor = "#232343";
            backgroundImage = "none";
        }
        let style = {
            width: 420,
            margin: "0 auto",
            padding: padding,
            backgroundColor: backgroundColor,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "49px",
            backgroundImage: backgroundImage,
            marginBottom: "50px",
            position: "absolute",
            transition: "1000ms",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
        }
        return style
    }

    return (
        <Box style={ flipStyle }
            sx={getCurrentStyle()}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                lineHeight: "38px",
                color: "#FFF",
            }}>
                <p>{dataValid}</p>
                <p>{cvvNumber}</p>
            </Box>
        </Box>
    )
}