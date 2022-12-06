import AppTask1 from "./components/Task1/AppTask1";
import { UsersDataProvider } from "./context/UsersData";
import ContactsListTask2 from "./components/Task2/ContactsListTask2";
import { AppTask3 } from "./components/Task3/AppTask3";
import { AppTask4 } from "./components/Task4/AppTask4";
import { Order } from "./components/Task4/Order";
import { AllOrders } from "./components/Task4/AllOrders";
import { OrdersId } from "./components/Task4/OrdersId";
import { Header } from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppToRender = () => {

    return (
        <div className="all-tasks">
            <Header />
            <Routes>
                <Route path="/" element={
                    <UsersDataProvider>
                        <AppTask1 />
                    </UsersDataProvider>
                }/>
                <Route path="/task2" element={<ContactsListTask2 />}/>
                <Route path="/task3" element={<AppTask3 />}/>
                <Route path="task4" element={<AppTask4 />}>
                    <Route path="order" element={<Order />}/>
                    <Route path="all_orders" element={<AllOrders />}>
                        <Route path=":orders_id" element={<OrdersId/>}/>
                    </Route>
                </Route>
                <Route path="/navigate" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    )
}