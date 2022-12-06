import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProviderWrap = (props) => {
    const [album, setAlbum] = useState([]);
    const [error, setError] = useState("");

    const getAlbum = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const resultRequest = await response.json();
        if (response.ok) {
          setAlbum( resultRequest );
        } else {
          setError( resultRequest );
          //або у разі помилки та наявності відповіді з сервера показати юзеру текст цієї помилки через модальне вікно
          //наприклад коли сервер відповідає що такий логін зайнятий або на цей мейл вже реєструвались
          throw new Error(`Album can't download, because there was an error ${error}`);
        }
      } catch (error) {
        console.log('error.message :>> ', error.message);
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