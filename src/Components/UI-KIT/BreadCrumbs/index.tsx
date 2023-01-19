import React, { FC } from 'react';
import * as ST from './styled';

type BreadCrumbsProps = {
  array: BreadCrumbsArrayType[];
};

export type BreadCrumbsArrayType = {
  id: number;
  name: string;
  url: string;
};

const DefaultsValues = {
  HoverActive: true,
  HoverDisable: false,
};

const BreadCrumbs: FC<BreadCrumbsProps> = ({ array }) => (
  <ST.BreadCrumbs>
    {array.map((item, index) => (
      <>
        <ST.Item
          isLast={index === 3}
          isHover={DefaultsValues.HoverActive}
        >
          {item.name}
        </ST.Item>
        {index === 3 ? (
          <ST.Item></ST.Item>
        ) : (
          <ST.Item isHover={DefaultsValues.HoverDisable}>/</ST.Item>
        )}
      </>
    ))}
  </ST.BreadCrumbs>
);

export default BreadCrumbs;
