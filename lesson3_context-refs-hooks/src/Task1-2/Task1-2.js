import '../App.css';
import React, { useContext, useState } from 'react';
import { DataContext } from './DataProvider';
import {RenderAlbum} from './RenderAlbum';
import { Form } from "./RenderForm"

const AppTask1 = () => {
  const [state, setState] = useState({
    numberItems: "",
    albumToRender: [],
  });
  
  const context = useContext(DataContext);

  const handleChangeItems = (event) => {
    setState({ numberItems: event.target.value });
  }

  const handleSubmitItems = (event) => {
    event.preventDefault();
    const { album, isLoaded } = context;
    if (isLoaded) {
      let albumToRender = album.slice(0, state.numberItems);
      setState({ albumToRender, numberItems: "" });
    }
  }

  return (
    <div className="App">
      <Form numberItems={state.numberItems} handleChangeItems={handleChangeItems}
            handleSubmitItems={handleSubmitItems}/>
      <RenderAlbum albumToRender={state.albumToRender}/>
    </div>
  )
}

export default AppTask1;