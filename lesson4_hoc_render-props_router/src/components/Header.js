import "../style/App.css"
import { NavLink } from "react-router-dom"

const links = [
    {
        id: 1,
        path: "/",
        title: "Task1",
    },
    {
        id: 2,
        path: "/task2",
        title: "Task2",
    },
    {
        id: 3,
        path: "/task3",
        title: "Task3",
    },
    {
        id: 4,
        path: "/task4",
        title: "Task4",
    },
]

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className="header-list-flex">
                    {links.map(({ id, path, title }) => (
                        <li key={id}>
                            <NavLink
                                style={({ isActive }) => ({color: isActive ? "rgb(255, 0, 0)" : "rgba(9, 1, 230)"})}
                                to={path}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}