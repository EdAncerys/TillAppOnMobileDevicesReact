import React, { useState } from 'react';
import colors from '../config/colors';

export default function Button({ title = 'Button', width = '100%', onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: 'grid',
        backgroundColor: hover ? colors.secondary : colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        cursor: hover ? 'pointer' : '',
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <p style={styles.text}>{title}</p>
    </div>
  );
}

const styles = {
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
};
