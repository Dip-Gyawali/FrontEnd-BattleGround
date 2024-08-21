import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './Content';

export default function Screen() {
    const { hyperText, cascadeStyle, Javascrpt } = useContext(UserContext);
    const [output, setOutput] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            const html = hyperText || '';
            const css = cascadeStyle || '';
            const js = Javascrpt || '';
            const newOutput = `
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>`;
            setOutput(newOutput);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [hyperText, cascadeStyle, Javascrpt]);

    return (
        <div className='screen'>
            <iframe 
                title="output"
                sandbox='allow-scripts'
                width="100%"
                height="100vh"
                srcDoc={output}
            ></iframe>
        </div>
    );
}
