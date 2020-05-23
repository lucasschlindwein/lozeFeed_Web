import React, { Component } from 'react';

import './New.css';


class New extends Component{
  render(){
    return (
      <form id='new-post' >
        <input type='file'/>

        <input type='text' name='author' placeholder='Autor do post' />
        <input type='text' name='place' placeholder='Localização' />
        <input type='text' name='description' placeholder='Descrição' />
        <input type='text' name='hashtags' placeholder='Hashtags' />

        <button type='submit'>Enviar</button>
      </form>

    );
  }
}

export default New;
