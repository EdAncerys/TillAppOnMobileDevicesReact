import React, { useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';

import colors from '../config/colors';

export default function Button({
  title = 'Button',
  width = '100%',
  onClick,
  icon = false,
}) {
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
      <div style={styles.container}>
        <p style={styles.text}>{title}</p>
        {icon && <BsArrowRepeat size={30} />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    width: 300,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginRight: 20,
  },
};
