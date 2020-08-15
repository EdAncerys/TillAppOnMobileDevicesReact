import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../config/colors';

export default function TillAppMenuButton({
  icon,
  price = 0.01,
  buttonColor,
  iconColor = colors.white,
  size = 80,
}) {
  return (
    <div
      style={{
        display: 'grid',
        width: size,
        height: size,
        borderRadius: size / 4,
        backgroundColor: buttonColor,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => console.log(price)}
    >
      <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />
      <p
        style={{
          color: iconColor,
          margin: 0,
        }}
      >
        {price}
      </p>
    </div>
  );
}
