import React, { FC } from 'react';
import * as ST from './styled';
import { Link } from 'react-router-dom';

type BreadCrumbsProps = {
  array: BreadCrumbsArrayType[];
};

export type BreadCrumbsArrayType = {
  id: number;
  name: string;
  url: string;
};

const BreadCrumbs: FC<BreadCrumbsProps> = ({ array }) => {
  const lengthArray = array.length - 1;

  return (
    <ST.BreadCrumbs>
      {array.map((item, index) =>
        index !== lengthArray ? (
          <Link
            to={item.url}
            key={`Breadcrumbs-item-${item.id}`}
          >
            <ST.Item isLast={index === lengthArray}>{item.name}</ST.Item>
          </Link>
        ) : (
          <ST.Item isLast={index === lengthArray}>{item.name}</ST.Item>
        )
      )}
    </ST.BreadCrumbs>
  );
};

export default BreadCrumbs;
