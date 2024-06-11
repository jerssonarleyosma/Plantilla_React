import React from 'react';
import { FolderInteractive } from '@atoms/Folders/FolderInteractive/FolderInteractive.jsx';
import { TextWriting } from '@atoms/Texts/TextWriting/TextWriting.jsx'

const FolderDesktop = ( {width, height, text, sizeText} ) => {
  return (
    <>
      <FolderInteractive  width={width} height={height}>
        <TextWriting text={text} size={sizeText}/>
      </FolderInteractive>
    </>
  )
}


export { FolderDesktop }