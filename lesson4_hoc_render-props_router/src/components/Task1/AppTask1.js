import { withUsers } from "../../HOCs/withUsers";

const AppTask1 = ({ usersData }) => {
    if (!usersData) return null;

    return (
        <div className="task1">
            <h2>Users names:</h2>
            {usersData.map((item) => <p key={item.id}>{item.name}</p>)}
        </div>
    )
}

export default withUsers(AppTask1);