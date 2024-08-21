import React,{useContext} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import { Controlled as Code } from 'react-codemirror2';
import { UserContext } from './Content';

export default function Html() {

  const {hyperText,setHtml}= useContext(UserContext);
  function handleChange(editor, data, value) {
    setHtml(value);
  }
  return (
    <div className="code-editor">
      <Code
        value={hyperText}
        onBeforeChange={handleChange}
        className='editor-box'
        options={{
          theme: 'material',
          lineWrapping: true,
          lint: true,
          mode: "xml",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
