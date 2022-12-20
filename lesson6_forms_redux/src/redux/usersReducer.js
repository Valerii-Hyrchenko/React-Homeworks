import { CREATE_USER, FETCHED_USER } from "./types"
const savedUsers = [
    {
        id: 1,
        name: "Brock",
        surname: "McCoid",
        email: "hCoid9@globo.com",
        password: "pBYZfFiFnh5",
    },
    {
        id: 2,
        name: "Fernande",
        surname: "Yellep",
        email: "fyellep8@skyrock.com",
        password: "vvP4iSYrqRd2",
    },
    {
        id: 3,
        name: "Guillermo" ,
        surname: "Peskett" ,
        email: "gpeskett4@shareasale.com",
        password: "0AtmHdZ2Lo",
    },
    {
        id: 4,
        name: "Chilton",
        surname: "Oliff",
        email: "coliff6@businesswire.com",
        password: "EskALyItEQwO",
    }
]

const initialState = {
    users: savedUsers,
    fetchedUsers: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return { ...state, users: [state.users, action.payload] };
        
        case FETCHED_USER:
            return { ...state, fetchedUsers: action.payload };
        
        default:
            return state;
    }
}