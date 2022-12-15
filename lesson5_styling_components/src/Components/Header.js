import { Box } from "@mui/system"

export const Header = ({ setIsNewCard }) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 76px 10px",
        }}>
            <p style={{ fontSize: "48px" }}>Your cards</p>
            <Box onClick={() => setIsNewCard(true)} sx={{ cursor: "pointer" }}>
                <img style={{ width: 40 }} src="../assets/img/icons/add-card-icon.svg" alt="add-card-button" />
            </Box>
        </Box>
    )
}