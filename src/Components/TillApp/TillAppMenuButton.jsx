import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TillAppContext } from './TillAppContext';

import colors from '../../config/colors';

export default function TillAppMenuButton({
  icon,
  price,
  title = 'No Title',
  buttonColor = colors.primary,
  iconColor = colors.white,
  width = 80,
  height = 80,
}) {
  const { totalPrice } = useContext(TillAppContext);

  return (
    <div
      style={{
        display: 'grid',
        width: width,
        height: height,
        borderRadius: width / 4,
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
          {price && `£ ${price}`}
        </p>
      </div>
    </div>
  );
}
