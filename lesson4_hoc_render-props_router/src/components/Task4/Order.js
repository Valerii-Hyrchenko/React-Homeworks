import { useLocation } from "react-router-dom";

export const Order = () => {
    
    let location = useLocation();

    return (
        <div>
            <p>Current order №48756Р55:</p>
            <p>1 - Any product - price 10$</p>
            <p>2 - Any product - price 5$</p>
            <p>Total price:15$</p>
            {location.state ? <h4>Total price of the previous order - {location.state}</h4> : ""}
        </div>
    )
}