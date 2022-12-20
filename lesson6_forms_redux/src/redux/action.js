import { CREATE_USER, FETCHED_USER, HIDE_LOADER, SHOW_LOADER } from "./types";

export function createUser(user) {
    return {
        type: CREATE_USER,
        payload: user,
    }
}

export function showLoader () {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader () {
    return {
        type: HIDE_LOADER,
    }
}

export function fetchUser () {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch("https://my.api.mockaroo.com/users.json?key=fc23cb30");
            if (response.ok) {
                const result = await response.json();
                dispatch({
                    type: FETCHED_USER,
                    payload: result,
                })
                dispatch(hideLoader());
            } else {
                dispatch(hideLoader());
                throw new Error(`Users can't download, because there was an error code - ${response.status}`);
            }
        } catch (error) {
            console.log('error :>> ', error.message);
        }
    }
}