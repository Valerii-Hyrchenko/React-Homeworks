import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/action";

export const FetchedUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.fetchedUsers);
    const loading = useSelector(state => state.app.loading);

    if (loading) {
        return <div>...Loading</div>
    }

    if (!users.length) {
        return (
            <div>
                <button onClick={ () => dispatch(fetchUser()) } >Download users</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Downloaded users</h2>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
            {users.map((user) => <div
            style={{
                padding: "30px",
                width: "220px",
                border: "1px solid black",
                borderRadius: "3px",
                margin: "20px",
            }} key={user.id}>
                <p>User №{user.id}</p>
                <p>Name - {user.name}</p>
                <p>Surname - {user.surname}</p>
                <p>Email - {user.email}</p>
                <p>Password - {user.password}</p>
                </div>)}
            </div>
        </div>
    )
}