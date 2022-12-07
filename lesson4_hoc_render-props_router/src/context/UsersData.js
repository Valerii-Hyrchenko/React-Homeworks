import React, { createContext, useEffect, useState } from 'react';

export const UsersDataContext = createContext();

export const UsersDataProvider = (props) => {
  const [usersData, setUsersData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (response.ok) {
        const resultRequest = await response.json();
        setUsersData( resultRequest );
      } else {
        throw new Error(`Users data can't download, because there was an error code - ${response.status}`);
      }
    } catch (error) {
      console.log('error :>> ', error.message);
    }
  }

  useEffect(()=> {
    getUserData();
  }, []);
  return (
    <UsersDataContext.Provider value={{ usersData }}>
      { props.children }
    </UsersDataContext.Provider>
  )
}