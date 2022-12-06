import { loaderHOC } from "../../HOCs/loaderHOC";

const ContactsListTask2 = (props) => {
    
    if (props.loaded) {
        return (
            <div>
                <h2>Users list:</h2>
                {props.contacts.map((item) => {
                    return (
                        <div className="user" key={item.id}>
                            <p>Username: {item.name}</p>
                            <img src={item.thumbnail} alt="user_avatar"></img>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}

export default loaderHOC(ContactsListTask2);