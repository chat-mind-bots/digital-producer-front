import { FC } from 'react';
import * as ST from './styled';

type LectorProps = {
  name: string;
  description: string;
  img: JSX.Element;
};

const Lector: FC<LectorProps> = ({ name, description, img }) => (
  <ST.Lector>
    {img}
    <ST.Name>{name}</ST.Name>
    <ST.Description>{description}</ST.Description>
  </ST.Lector>
);

export default Lector;
