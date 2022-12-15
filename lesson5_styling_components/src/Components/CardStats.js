import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { CardsDataContext } from "../context/CardsDataProvider"

export const CardStats = () => {

    const cardsContext = useContext(CardsDataContext);
    const { cardStats } = cardsContext;

    const sortCardStats = () => {
        let temporaryResult = cardStats.sort(function (first, second) {
            if (+first.date.slice(0, 2) > +second.date.slice(0, 2)) return 1
            if (+first.date.slice(0, 2) < +second.date.slice(0, 2)) return -1
            return 0
        })
        return temporaryResult.sort(function (first, second) {
            if (+first.date.slice(3, 5) > +second.date.slice(3, 5)) return 1
            if (+first.date.slice(3, 5) < +second.date.slice(3, 5)) return -1
            return 0
        })
    }

    return (
        <Box sx={{
            maxWidth: 520,
            margin: "0 auto",
            backgroundColor: "#FBFBFF",
            position: "relative",
            zIndex: 0,
            borderRadius: "49px",
            marginTop: "-65px",
            animationName: "showStats",
            animationDuration: "1000ms",
            transitionTimingFunction: "linear",

            "@keyframes showStats": {
                "0%": {
                    opacity: 0,
                    marginTop: "-400px",
                },
            
                "100%": {
                    marginTop: "-65px",
                    opacity: 1,
                }
            }
        }}>
            <Box sx={{ padding: "90px 50px 30px 43px" }}>
                <h2 style={{
                    fontSize: "48px",
                    marginBottom: "35px",
                }}>Card stats</h2>
                <Box sx={{
                        width: '100%',
                        fontSize: 24,
                        }}>
                        {sortCardStats().map(({id, date, company, sum}) =>
                        <Grid container style={{ marginBottom: "24px" }} key={id}>
                            <Grid item xs><p>{(date.slice(0, 5)).replace("/", ".")}</p></Grid>
                            <Grid item xs><p>{company}</p></Grid>
                            <Grid item xs><p style={{ textAlign: "right" }}>{sum.slice(1)} {sum.slice(0, 1)}</p></Grid>
                        </Grid>)}
                </Box>
            </Box>
        </Box>
    )
}