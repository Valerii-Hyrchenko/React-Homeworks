import { createContext, useEffect, useState } from "react";

export const CardsDataContext = createContext();

export const CardsDataProvider = (props) => {

    const [cardsData, setCardsData] = useState([]);
    const [cardStats, setCardStats] = useState([]);

    const getCardsData = async({ endpoint, resultContainer }) => {
        try {
            const response = await fetch(endpoint);
            if (response.ok) {
                const result = await response.json();
                resultContainer(result);
            } else {
                throw new Error(`Cards can't download, because there was an error code - ${response.status}`);
            }
        } catch (error) {
            console.log('error :>> ', error.message);
        }
    }

    useEffect(() => {
        getCardsData({
            endpoint: "https://my.api.mockaroo.com/cards.json?key=fc23cb30",
            resultContainer: setCardsData,
        });
        getCardsData({
            endpoint: "https://my.api.mockaroo.com/card_stats.json?key=fc23cb30",
            resultContainer: setCardStats,
        });
    }, [])

    return (
        <CardsDataContext.Provider value={{cardsData, cardStats}}>
            {props.children}
        </CardsDataContext.Provider>
    )
}