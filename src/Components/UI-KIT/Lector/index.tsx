import { FC } from 'react';
import * as ST from './styled';

type LectorProps = {
  name: string;
  description: string;
  svg: JSX.Element;
};

const Lector: FC<LectorProps> = ({ name, description, svg }) => (
  <ST.Lector>
    {svg}
    <ST.Name>{name}</ST.Name>
    <ST.Description>{description}</ST.Description>
  </ST.Lector>
);

export default Lector;
