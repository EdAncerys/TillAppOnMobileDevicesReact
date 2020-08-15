import React from 'react';
import colors from '../config/colors';
import Button from './Button';

export default function DeviceScreen({
  children,
  height = '30vh',
  width = '20vw',
}) {
  return (
    <div style={styles.container}>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          backgroundColor: colors.light,
          border: `5px solid ${colors.black}`,
          borderBottom: `35px solid ${colors.black}`,
          height: height,
          width: width,
          borderRadius: 25,
          margin: 10,
        }}
      >
        <>{children}</>
      </div>
      <Button />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
