import { Image } from 'antd';
import { imageEmpty } from '../../../api/helpers';
import React from 'react';

export const CoinTitle = ({
  name,
  base,
  imageWidth
}) => {
  return (
    <>
      <Image
        width={imageWidth || '4em'}
        style={{ paddingRight: '0.5em' }}
        preview={false}
        fallback={imageEmpty}
        src={`${Meteor.settings.public.STORAGE_BASE_URL || ''}${base
          .toString()
          .toLowerCase()}.svg`}
      />
      <span>
        {base} {name}
      </span>
    </>
  );
};
