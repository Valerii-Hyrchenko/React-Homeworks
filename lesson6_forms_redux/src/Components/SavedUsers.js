import { connect } from "react-redux";

const SavedUsers = ({ users }) => {
    return (
        <div>
            <h2>Saved users</h2>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"}} >
            {users.map((user) => <div
            style={{
                padding: "30px",
                width: "220px",
                border: "1px solid black",
                borderRadius: "3px",
                margin: "20px",
            }}
            key={user.id}>
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

const mapStateToProps = (state) => {
    return{
        users: state.users.users,
    }
}

export default connect(mapStateToProps, null)(SavedUsers);