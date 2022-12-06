import { withUsers } from "../../HOCs/withUsers";

const AppTask1 = (props) => {
    if (props.usersData) {
        return (
            <div className="task1">
                <h2>Users names:</h2>
                {props.usersData.map((item) => <p key={item.id}>{item.name}</p>)}
            </div>
        )
    }
}

export default withUsers(AppTask1);