import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import { AddNewCard } from "./Components/AddNewCard";
import CardsList from "./Components/CardsList";
import { ThemeProvider } from '@mui/material/styles';
import "@fontsource/abel";
import { theme } from "./theme/theme";
import { inputTheme } from "./theme/theme";
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from "react";

const App = () => {

  const [ selectedCard, setSelectedCard ] = useState(null);
  const [ isNewCard, setIsNewCard ] = useState(false);

  const getSelectedCard = (card) => setSelectedCard(card);

  return (
    <Container sx={{
      width: 676,
      height: 1250,
      backgroundColor: "#F2F2F2",
      paddingBottom: 10,
    }}>
      <ThemeProvider theme={theme}>
        <Typography component={'div'}>
          {isNewCard ? <AddNewCard setIsNewCard={setIsNewCard} /> : null}
          {!isNewCard ? <Header setIsNewCard={setIsNewCard} /> : null}
          <ThemeProvider theme={inputTheme}>
            {!isNewCard ? <CardsList getSelectedCard={getSelectedCard} /> : null}
          </ThemeProvider>
          {selectedCard && !isNewCard ? <Card key={selectedCard.id} selectedCard={selectedCard} /> : ""}
        </Typography>
      </ThemeProvider>
    </Container>
  );
}

export default App;