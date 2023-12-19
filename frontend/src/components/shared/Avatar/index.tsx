import { FC } from 'react';

import { FaUser } from 'react-icons/fa';

import { AvatarStyled } from './style';

interface Props {
  size?: number;
}

const Avatar: FC<Props> = ({ size = 64 }) => {
  return (
    <AvatarStyled size={size}>
      <FaUser size={size / 2} color="#ffffff" />
    </AvatarStyled>
  );
};

export default Avatar;