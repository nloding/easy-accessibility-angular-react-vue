import React from 'react'

function resolveImage(src) {
  return require(`./assets/${src}`);
}

export default function LocalImage({
  src,
  ...props
}) {
  return (
    <div style={{ 
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img
        src={resolveImage(src)}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        {...props}
      />
    </div>
  );
}