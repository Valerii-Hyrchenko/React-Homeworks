import React, { createContext, useEffect, useState } from 'react';

export const UsersDataContext = createContext();

export const UsersDataProvider = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState("");

  const getUserData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const resultRequest = await response.json();
      if (response.ok) {
        setUsersData( { usersData: resultRequest } );
      } else {
        setError( { error: resultRequest } );
        throw new Error(`Album can't download, because there was an error ${error}`);
      }
    } catch (error) {
      console.log('error.message :>> ', error.message);
    }
  }

  useEffect(()=> {
    getUserData();
  }, []);
    
  return (
    <UsersDataContext.Provider value={ usersData }>
      { props.children }
    </UsersDataContext.Provider>
  )
}