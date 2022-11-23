import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProviderWrap = (props) => {
    const [state, setState] = useState({ album: null, isLoaded: false });
  
    useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/albums")
      .then(async response => {
        const data = await response.json();
  
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        } else {
          setState({ album: data, isLoaded: true });
        }
      })
      .catch(error => {
        console.error('There was an error!', error.toString());
      });
    }, []);
    
    return (
      <DataContext.Provider value={ state }>
        { props.children }
      </DataContext.Provider>
    )
  }