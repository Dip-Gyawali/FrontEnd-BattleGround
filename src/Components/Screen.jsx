import React from 'react'

export default function Screen() {
    return (
        <div className='screen'>
            <iframe 
              title="output"
              sandbox='allows-script'
              width="100%"
              height="100vh"
            ></iframe>
        </div>
    )
}
