import { loaderHOC } from "../../HOCs/loaderHOC";

const ContactsListTask2 = ({ loaded, contacts }) => {
    if (!loaded) return <div>Loading...</div>
    return (
        <div>
            <div>
                <h2>Users list:</h2>
                {contacts.map((item) => (
                        <div className="user" key={item.id}>
                            <p>Username: {item.name}</p>
                            <img src={item.thumbnail} alt="user_avatar"/>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default loaderHOC(ContactsListTask2);