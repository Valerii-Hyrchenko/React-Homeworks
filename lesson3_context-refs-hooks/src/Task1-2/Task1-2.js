import '../App.css';
import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider'
import {Album} from './Album';
import { Form } from "./RenderForm"

const AppTask1 = () => {
  const [numberItems, setNumberItems] = useState( "" );
  const [albumToRender, setAlbumToRender] = useState( [] );
  
  const context = useContext(DataContext);

  const handleChangeItems = (event) => {
    setNumberItems( event.target.value );
  }

  const handleSubmitItems = (event) => {
    event.preventDefault();
    const { album } = context;
    let slicedAlbum = album.slice(0, numberItems);
    setAlbumToRender( slicedAlbum );
  }

  return (
    <div className="App">

      <Form numberItems={numberItems}
      handleChangeItems={handleChangeItems}
      handleSubmitItems={handleSubmitItems}/>

      <Album albumToRender={albumToRender}/>
    </div>
  )
}

export default AppTask1;