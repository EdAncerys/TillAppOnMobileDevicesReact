import React, { useContext } from 'react';
import { TillAppContext } from './TillAppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../config/colors';

export default function TillAppMenuButton({
  icon,
  price,
  title = 'Title',
  buttonColor = colors.primary,
  iconColor = colors.white,
  width = 80,
  height = 80,
}) {
  const {
    totalPrice,
    setTotalPrice,
    selectedItems,
    setSelectedItems,
  } = useContext(TillAppContext);

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
      }}
      onClick={() => {
        if (price) setTotalPrice(totalPrice + price);
        if (price && title)
          setSelectedItems([...selectedItems, { title: title, price: price }]);
        console.log(totalPrice, selectedItems);
      }}
    >
      <div
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {icon && <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />}
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
