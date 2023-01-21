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

const BreadCrumbs: FC<BreadCrumbsProps> = ({ array }) => {
  const lengthArray = array.length - 1;

  return (
    <ST.BreadCrumbs>
      {array.map((item, index) => (
        <ST.Items key={`Breadcrumbs-item-${item.id}`}>
          <ST.Item
            isLast={index === lengthArray}
            isHover={DefaultsValues.HoverActive}
          >
            {item.name}
          </ST.Item>
          {index !== lengthArray && (
            <ST.Item isHover={DefaultsValues.HoverDisable}>/</ST.Item>
          )}
        </ST.Items>
      ))}
    </ST.BreadCrumbs>
  );
};

export default BreadCrumbs;
