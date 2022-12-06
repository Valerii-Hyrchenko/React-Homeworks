import { Link, Outlet } from "react-router-dom"

export const AppTask4 = () => {
    return (
        <div>
            <h4>
                Testing React Router library:
            </h4>
            <div>
                <Link to="/task4/order">Check current order</Link>
            </div>
            <div>
                <Link to="/task4/all_orders">Check order archive</Link>
            </div>
            <Outlet />
        </div>
    )
}