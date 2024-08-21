import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Editor from './Editor';
import Screen from './Screen';

export const UserContext = createContext();

export default function Content() {
  const [html, setHtml] = useState('');
  const [css,setCss] = useState('');
  const [js,setJs] =useState('');
  return (
    <div className='home'>
      <UserContext.Provider value={{hyperText:html,cascadeStyle:css,Javascrpt:js,setHtml,setCss,setJs}}>
        <Editor/>
        <Screen/>
      </UserContext.Provider>
    </div>
  );
}
