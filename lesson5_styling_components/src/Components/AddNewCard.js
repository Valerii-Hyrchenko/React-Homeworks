import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { CardFront } from "./CardFront";
import { inputTheme } from "../theme/theme";
import { ThemeProvider } from '@mui/material/styles';
import { useState } from "react";

export const AddNewCard = ({ setIsNewCard }) => {

    const [ cardNumber, setCardNumber] = useState("");
    const [ cvv, setCvv] = useState("");
    const [ name, setName] = useState("");
    const [ typeCard, setTypeCard] = useState("");
    const [ date, setDate] = useState("");

    const inputsStyle = {
        minWidth: 514,
        borderRadius: "25px",
        marginLeft: "10px",
        ".css-1uuc8mz-MuiInputBase-root-MuiOutlinedInput-root": {
            borderRadius: "25px",
            width: 514,
            marginBottom: "40px",
            backgroundColor: "secondary.main",
        }
    }

    const buttonsStyle = {
        width: 265,
        marginTop: "20px",
        borderRadius: "25px",
        backgroundColor: "#AA24E9",
        "&:hover": {
            backgroundColor: "#7D7DB4",
        }
    }

    const handleChangeCardNumber = (event) => setCardNumber(event.target.value);

    const handleChangeCvv = (event) => setCvv(event.target.value);

    const handleChangeDate = (event) => setDate(event.target.value);

    const handleChangeName = (event) => setName(event.target.value);

    const handleChangeTypeCard = (event) => setTypeCard(event.target.value);

    const sendPatchRequest = async({ endpoint, body }) => {
        try {
            const response = await fetch( endpoint, {
                method: "PATCH",
                body: JSON.stringify(body),
            });
        if (!response.ok) {
            throw new Error(`There was an error code ${response.status}`);
        }
        } catch (error) {
            console.log(error.message);
        }
        
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const body = {
            id: Math.floor(Math.random() * 100),
            card_type: typeCard,
            name: name,
            card_number: cardNumber,
            cvv_number: cvv,
            date_valid: date
        }
        sendPatchRequest({
            endpoint: "https://my.api.mockaroo.com/cards.json?key=fc23cb30&__method=PATCH",
            body: body,
        })
        setIsNewCard(false);
    }

    const handleCancelForm = (event) => {
        event.preventDefault();
        setIsNewCard(false);
    }

    return (
        <Box
            sx={{
                margin: "0 auto",
                padding: "40px 40px 0",
                animationName: "showForm",
                animationDuration: "1200ms",
                transitionTimingFunction: "linear",

                "@keyframes showForm": {
                    "0%": {
                        opacity: 0,
                        marginTop: "700px",
                    },
                
                    "100%": {
                        marginTop: 0,
                        opacity: 1,
                    }
                }
            }}>
            <Box sx={{
                    position: "relative",
                    zIndex: 2000,
                }}>

                <h2 style={{
                    fontSize: 48,
                    margin: "0 0 42px 20px",
                }}>
                    Create a new card
                </h2>

                <CardFront
                    cardData={{
                        name: "FIRSTNAME LASTNAME",
                        cardNumber: "**** **** **** 1234",
                        cardType: "visa",
                    }}
                />

                <ThemeProvider theme={inputTheme}>
                    <Box
                        onSubmit={handleFormSubmit}
                        component="form"
                        sx={{ paddingTop: "380px" }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField onChange={handleChangeCardNumber} value={cardNumber} sx={inputsStyle} id="outlined-basic" label="Card number" placeholder="0888008800005569" variant="outlined" />
                            <TextField onChange={handleChangeCvv} value={cvv} sx={inputsStyle} id="outlined-basic" label="CVV" placeholder="123" variant="outlined" />
                            <TextField onChange={handleChangeDate} value={date} sx={inputsStyle} id="outlined-basic" label="Card validity date" placeholder="30/12/24" variant="outlined" />
                            <TextField onChange={handleChangeName} value={name} sx={inputsStyle} id="outlined-basic" label="Your fullname" placeholder="Jonh Snow" variant="outlined" />
                            <TextField onChange={handleChangeTypeCard} value={typeCard} sx={inputsStyle} id="outlined-basic" label="VISA or MASTERCARD" placeholder="VISA" variant="outlined" />
                            <Button type="submit"
                                style={{marginRight: "15px"}}
                                sx={buttonsStyle}
                            variant="contained">Add card</Button>
                            <Button type="submit" onClick={handleCancelForm}
                                sx={buttonsStyle}
                            variant="contained">Cancel</Button>
                    </Box>
                </ThemeProvider>

            </Box>
        </Box>
                        
    )
}
