import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TillAppContext } from './TillAppContext';

import colors from '../../config/colors';

export default function TillAppMenuButton({
  icon,
  price = 0.01,
  title = 'No Title',
  buttonColor = colors.primary,
  iconColor = colors.white,
  size = 80,
}) {
  const { totalPrice } = useContext(TillAppContext);

  return (
    <div
      style={{
        display: 'grid',
        width: size,
        height: size,
        borderRadius: size / 4,
        backgroundColor: buttonColor,
        padding: 5,
        margin: 20,
        marginRight: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => console.log(totalPrice)}
    >
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
        }}
      >
        <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />
      </div>
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
        }}
      >
        <p
          style={{
            color: iconColor,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: iconColor,
            margin: 0,
          }}
        >
          £ {price}
        </p>
      </div>
    </div>
  );
}
