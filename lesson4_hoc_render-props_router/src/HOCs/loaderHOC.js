import { Component } from 'react';

export const loaderHOC = (WrappedComponent) => {
    return class extends Component {
        state = {
            contacts: [],
            loaded: false,
        }

        componentDidMount() {
            fetch("https://api.randomuser.me/?nat=us,gb&results=10")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Cannot load users data, there was an error");
                }
            })
            .then(response => {
                let contacts = this.convertData(response.results);
                return contacts;
            })
            .then(contacts => {
                return this.withDelay(2000)(contacts);
            })
            .then(contacts => {
                this.setState({ contacts, loaded: true });
            })
            .catch(error => {
                console.log(`There was an error - ${error}`);
            })
        }

        convertData = (resultRequest) => {
            let contacts = resultRequest.map((user) => {
                let contacts = {
                    name: `${user.name.first} ${user.name.last}`,
                    thumbnail: user.picture.thumbnail,
                    id: user.id.value,
                }
                return contacts
            })
            return contacts;
        }

        withDelay = (delay) => (data) => {
            return new Promise((resolve, reject) => {
               setTimeout(() => {
                    resolve(data);
               }, delay);
           });
        };

        render() {
            return(
                <WrappedComponent {...this.state} {...this.props} />
            )
        }
    }
}