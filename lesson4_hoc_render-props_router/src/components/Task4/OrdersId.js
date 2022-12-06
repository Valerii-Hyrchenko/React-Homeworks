import { useParams, useNavigate } from "react-router-dom";
import { ordersData } from "./AllOrders";

export const OrdersId = () => {
    const { orders_id } = useParams();
    const navigate = useNavigate();

    const getOrderToRender = (ordersData) => {
        return ordersData.filter((item) => item.number === orders_id);
    }
    let orderToRender = getOrderToRender(ordersData);
    const {
        number,
        date,
        productName1,
        productPrice1,
        productName2,
        productPrice2,
        totalPrice,
    } = orderToRender[0];

    return (
        <div>
            <h4>Order number {number}:</h4>
            <p>Date - {date}</p>
            <p>1.{productName1} - price {productPrice1}</p>
            <p>2.{productName2} - price {productPrice2}</p>
            <p>Total price: {totalPrice}</p>
            <button onClick={()=> navigate("/task4/order", { state: totalPrice })}>Go to current order</button>
        </div>
    )
}