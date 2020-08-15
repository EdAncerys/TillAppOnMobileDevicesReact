import React from 'react';
import colors from '../config/colors';

export default function Button({ text = 'Button', width = '100%' }) {
  return (
    <div
      style={{
        display: 'grid',
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
      }}
    >
      <p style={styles.text}>{text}</p>
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
