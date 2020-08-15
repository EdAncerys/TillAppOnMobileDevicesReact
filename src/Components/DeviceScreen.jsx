import React from 'react';
import colors from '../config/colors';

export default function DeviceScreen({
  children,
  height = '30vh',
  width = '20vw',
}) {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        backgroundColor: colors.light,
        border: `5px solid ${colors.black}`,
        borderBottom: `35px solid ${colors.black}`,
        height: height,
        width: width,
        borderRadius: 20,
      }}
    >
      <>{children}</>
    </div>
  );
}
