import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProviderWrap = (props) => {
    const [album, setAlbum] = useState( [] );
    const [error, setError] = useState( "" );

    const getAlbum = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (response.ok) {
          const resultRequest = await response.json();
          setAlbum({ album: resultRequest });
        } else {
          const resultWithError = await response.json();
          setError( resultWithError );
          console.log('error :>> ', error);
          //або у разі помилки та наявності відповіді з сервера показати юзеру текст цієї помилки через модальне вікно
          //наприклад коли сервер відповідає що такий логін зайнятий або на цей мейл вже реєструвались
        }
      } catch (error) {
        throw new Error(`Album can't download, because there was an error - ${error.message}`);
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