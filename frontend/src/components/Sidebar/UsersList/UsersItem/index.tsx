import { FC } from 'react';

import { User } from '../../../../types/User';
import {
  UsersItemBody,
  UsersItemLastSeen,
  UsersItemName,
  UsersItemStyled
} from './style';
import Avatar from '../../../shared/Avatar';
import formatDate from '../../../../helpers/formatDate';

interface Props {
  data: User;
  onClick: (user: User) => void;
  isActive: boolean;
}

const UsersItem: FC<Props> = ({ data, onClick, isActive }) => {
  const formattedDate = formatDate(data.lastSeen);

  return (
    <UsersItemStyled onClick={() => onClick(data)} isActive={isActive}>
      <Avatar size={40} />
      <UsersItemBody>
        <UsersItemName>{data.displayName}</UsersItemName>
        {data.isOnline ? (
          <UsersItemLastSeen isOnline>Online</UsersItemLastSeen>
        ) : (
          <UsersItemLastSeen>{formattedDate}</UsersItemLastSeen>
        )}
      </UsersItemBody>
    </UsersItemStyled>
  );
};

export default UsersItem;
