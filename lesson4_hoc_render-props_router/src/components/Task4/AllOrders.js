import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const ordersData = [ 
    {
        id: 154,
        date: "01.10.2020",
        number: "48756Р55",
        productName1: "Any product1",
        productPrice1: "10$",
        productName2: "Any product2",
        productPrice2: "5$",
        totalPrice: "15$",
    },
    {
        id: 247,
        date: "15.05.2021",
        number: "48756Р56",
        productName1: "Any product1",
        productPrice1: "40$",
        productName2: "Any product2",
        productPrice2: "10$",
        totalPrice: "50$",
    },
    {
        id: 153,
        date: "01.11.2021",
        number: "48756Р57",
        productName1: "Any product1",
        productPrice1: "20$",
        productName2: "Any product2",
        productPrice2: "5$",
        totalPrice: "25$",
    },
    {
        id: 412,
        date: "11.12.2021",
        number: "48756Р58",
        productName1: "Any product1",
        productPrice1: "100$",
        productName2: "Any product2",
        productPrice2: "55$",
        totalPrice: "155$",
    },
    {
        id: 55,
        date: "01.60.2022",
        number: "48756Р59",
        productName1: "Any product1",
        productPrice1: "30$",
        productName2: "Any product2",
        productPrice2: "15$",
        totalPrice: "45$",
    },
    {
        id: 146,
        date: "14.11.2022",
        number: "48756Р60",
        productName1: "Any product1",
        productPrice1: "60$",
        productName2: "Any product2",
        productPrice2: "50$",
        totalPrice: "110$",
    },
];

export const AllOrders = () => {
    
    const [orderToShow, setOrderToShow] = useState("");

    const handleChangeOrder = (event) => {
        event.preventDefault();
        ordersData.forEach((item) => {
            if ((ordersData.indexOf(item) + 1) === +event.target.value) {
                setOrderToShow(item.number);
            }
        })
    }

    return (
        <div>
            <div>
                <h4>
                    You're order list:
                </h4>
                {ordersData.map((item) => {
                    return(
                        <p key={item.id}>{`${ordersData.indexOf(item) + 1}.`} Date: {item.date}, Total price - {item.totalPrice}</p>
                    )
                })}
            </div>
            <div>
                <input onChange={handleChangeOrder} placeholder="enter sequence number 1-6"></input>
            </div>
            <div>
                <Link to={`/task4/all_orders/${orderToShow}`}>Show order</Link>
                <Outlet/>
            </div>
        </div>
    )
}