import React from 'react';

export default function DeviceScreen({ height = '30vh', width = '20vw' }) {
  return (
    <div
      style={{
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        height: height,
        width: width,
        borderRadius: 20,
      }}
    >
      <p>Im a device screen</p>
    </div>
  );
}
