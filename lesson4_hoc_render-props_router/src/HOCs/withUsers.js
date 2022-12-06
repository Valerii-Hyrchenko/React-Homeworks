import { Component } from "react";
import { UsersDataContext } from "../context/UsersData";

export const withUsers = (WrappedComponent) => {
    return class extends Component {
        render () {
            return (
                <UsersDataContext.Consumer>
                    {(context) => {
                        return <WrappedComponent {...context} {...this.props}/>
                    }}
                </UsersDataContext.Consumer>
            )
        }
    }
}