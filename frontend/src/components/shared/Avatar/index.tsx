import { FC } from 'react';

import { FaUser } from 'react-icons/fa';

import { AvatarStyled } from './style';

const Avatar: FC = () => {
  return (
    <AvatarStyled>
      <FaUser size={32} color="#ffffff" />
    </AvatarStyled>
  );
};

export default Avatar;