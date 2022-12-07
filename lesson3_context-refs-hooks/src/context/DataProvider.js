import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProviderWrap = (props) => {
    const [album, setAlbum] = useState([]);

    const getAlbum = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (response.ok) {
          const resultRequest = await response.json();
          setAlbum( resultRequest );
        } else {
          throw new Error(`Album can't download, because there was an error code - ${response.status}`);
        }
      } catch (error) {
        console.log('error :>> ', error.message);
      }
    }

    useEffect(()=> {
      getAlbum();
    }, []);
    
    return (
      <DataContext.Provider value={ album }>
        { props.children }
      </DataContext.Provider>
    )
  }