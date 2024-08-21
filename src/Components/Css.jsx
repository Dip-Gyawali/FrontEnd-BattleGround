import React,{useContext} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/css/css';
import { Controlled as Code } from 'react-codemirror2';
import { UserContext } from './Content';

export default function Css() {

  const {cascadeStyle,setCss}=useContext(UserContext);
  function handleChange(editor, data, value) {
    setCss(value);
  }

  return (
    <div className="code-editor">
      <Code
        value={cascadeStyle}
        onBeforeChange={handleChange}
        className='editor-box'
        options={{
          theme: 'material',
          lineWrapping: true,
          lint: true,
          mode: "css",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
