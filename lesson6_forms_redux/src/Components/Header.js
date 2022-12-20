import { Link} from "react-router-dom"

export const Header = () => {
    return (
        <div style={{
            display:"flex",
            justifyContent: "space-around",
            margin: "50px 0",
        }}>
            <Link to="forms">TASK 1-FORMS</Link>
            <Link to="redux">TASK 2-REDUX</Link>
        </div>
    )
}