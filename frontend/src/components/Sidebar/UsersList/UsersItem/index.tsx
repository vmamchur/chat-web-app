import { FC } from 'react';

import { User } from '../../../../types/User';
import {
  UsersItemBody,
  UsersItemLastSeen,
  UsersItemName,
  UsersItemStyled
} from './style';
import Avatar from '../../../shared/Avatar';

interface Props {
  data: User;
  onClick: (user: User) => void;
  isActive: boolean;
}

const UsersItem: FC<Props> = ({ data, onClick, isActive }) => {
  return (
    <UsersItemStyled onClick={() => onClick(data)} isActive={isActive}>
      <Avatar size={40} />
      <UsersItemBody>
        <UsersItemName>{data.displayName}</UsersItemName>
        <UsersItemLastSeen>Last seen: 12 day(s) ago</UsersItemLastSeen>
      </UsersItemBody>
    </UsersItemStyled>
  );
};

export default UsersItem;
