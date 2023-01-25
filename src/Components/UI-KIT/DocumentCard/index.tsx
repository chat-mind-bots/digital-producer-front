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
  <Link to={url}>
    <ST.DocumentCard>
      <ST.Name>
        {name}
        <ArrowDown />
      </ST.Name>
      <ST.Description>{description}</ST.Description>
    </ST.DocumentCard>
  </Link>
);

export default DocumentCard;
