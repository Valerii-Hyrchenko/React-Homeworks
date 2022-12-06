import "../style/App.css"
import { NavLink } from "react-router-dom"

export const Header = () => {

    return (
        <header>
            <nav>
                <ul className="header-list-flex">
                    <div>
                        <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "rgb(255, 0, 0)" : "rgba(9, 1, 230)"
                            }
                        }}
                        to="/">Task1</NavLink>
                    </div>
                    <div>
                        <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "rgb(255, 0, 0)" : "rgba(9, 1, 230)"
                            }
                        }}
                        to="/task2">Task2</NavLink>
                    </div>
                    <div>
                        <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "rgb(255, 0, 0)" : "rgba(9, 1, 230)"
                            }
                        }}
                        to="/task3">Task3</NavLink>
                    </div>
                    <div>
                        <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "rgb(255, 0, 0)" : "rgba(9, 1, 230)"
                            }
                        }}
                        to="/task4">Task4</NavLink>
                    </div>
                    <div>
                        <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "rgb(255, 0, 0)" : "rgba(9, 1, 230)"
                            }
                        }}
                        to="/navigate">Link for navigate to Task1</NavLink>
                    </div>
                </ul>
            </nav>
        </header>
    )
}