import React, { useState } from 'react';
import colors from '../config/colors';
import Button from './Button';

const deviceBorder = `5px solid ${colors.black}`;
const deviceBottom = `45px solid ${colors.black}`;

export default function DeviceScreen({
  children,
  title,
  height = '30vh',
  width = '20vw',
}) {
  const [rotateScreen, setRotateScreen] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          backgroundColor: colors.light,
          border: deviceBorder,
          borderBottom: rotateScreen ? deviceBorder : deviceBottom,
          borderRight: rotateScreen ? deviceBottom : deviceBorder,
          height: rotateScreen ? width : height,
          width: rotateScreen ? height : width,
          borderRadius: 25,
          margin: 10,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: rotateScreen ? width : height,
            width: rotateScreen ? height : width,
          }}
        >
          {children}
        </div>
      </div>
      <Button
        title="Rotate"
        onClick={() => setRotateScreen(!rotateScreen)}
        icon={true}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
  },
};
