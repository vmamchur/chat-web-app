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
}

const UsersItem: FC<Props> = ({ data }) => {
  return (
    <UsersItemStyled>
      <Avatar size={40} />
      <UsersItemBody>
        <UsersItemName>{data.displayName}</UsersItemName>
        <UsersItemLastSeen>Last seen: 12 day(s) ago</UsersItemLastSeen>
      </UsersItemBody>
    </UsersItemStyled>
  );
};

export default UsersItem;
