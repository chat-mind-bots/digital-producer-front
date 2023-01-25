import { FC } from 'react';
import { ReactComponent as ArrowDown } from 'Icons/ArrowDown.svg';
import { Link } from 'react-router-dom';
import * as ST from './styled';

type DocumentCardProps = {
  name: string;
  description: string;
  url: string;
};

const DocumentCard: FC<DocumentCardProps> = ({ name, description, url }) => (
  <ST.DocumentCard>
    <Link to={url}>
      <ST.Name>
        {name}
        <ArrowDown />
      </ST.Name>
      <ST.Description>{description}</ST.Description>
    </Link>
  </ST.DocumentCard>
);

export default DocumentCard;
