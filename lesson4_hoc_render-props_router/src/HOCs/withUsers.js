import { Component } from "react";
import { UsersDataContext } from "../context/UsersData";

export const withUsers = (WrappedComponent) => {
    return class extends Component {
        render () {
            return (
                <UsersDataContext.Consumer>
                    {(context) => {
                        let usersData = { usersData: context };
                        return <WrappedComponent {...usersData} {...this.props}/>
                    }}
                </UsersDataContext.Consumer>
            )
        }
    }
}