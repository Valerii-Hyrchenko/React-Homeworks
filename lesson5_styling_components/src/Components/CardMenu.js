import { Box } from "@mui/system"

export const CardMenu = ({
    flipCard,
    viewCardNumber,
    viewStats,
    isCardNumberShow,
}) => {

    const renderHideLine = () => {
        return (
            <svg style={{
                position: "absolute",
                top: 3,
                left: 0,
            }} width="47" height="41" viewBox="0 0 47 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="46.2065" y1="0.759257" x2="0.651059" y2="39.8067" stroke="black" strokeWidth="2"/>
            </svg>
        )
    }

    return (
        <Box
        sx={{
            backgroundColor: "#E2E2E7",
            width: 520,
            paddingTop: 8,
            borderRadius: "49px",
            margin: "-65px auto",
            position: "relative",
            zIndex: 500,
            animationName: "showMenu",
            animationDuration: "800ms",
            transitionTimingFunction: "linear",

            "@keyframes showMenu": {
                "0%": {
                    opacity: 0,
                    marginTop: "-160px",
                },
            
                "100%": {
                    marginTop: "-65px",
                    opacity: 1,
                }
            }
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 80px",
                padding: "12px 0",
            }}>

                <Box sx={{
                        cursor: "pointer",
                        position: "relative",
                        }} onClick={ viewCardNumber }>
                    {isCardNumberShow ? "" : renderHideLine()}
                    <img src="../assets/img/icons/view-icon.svg" alt="view-icon"/>
                </Box>

                <div style={{
                    height: "47px",
                    width: "2px",
                    backgroundColor: "#000",
                }}/>

                <Box sx={{ cursor: "pointer" }} onClick={() => viewStats() }>
                    <img src="../assets/img/icons/stats-icon.svg" alt="stats-icon"/>
                </Box>

                <div style={{
                    height: "47px",
                    width: "2px",
                    backgroundColor: "#000",
                }}/>

                <Box sx={{ cursor: "pointer" }} onClick={() => flipCard()}>
                    <img src="../assets/img/icons/flip-icon.svg" alt="flip-icon"/>
                </Box>
            </Box>
        </Box>
    )
}