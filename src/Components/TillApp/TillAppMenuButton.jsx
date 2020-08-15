import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../config/colors';

export default function TillAppMenuButton({
  icon,
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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />
    </div>
  );
}
