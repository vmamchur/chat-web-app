import { AvatarFieldStyled } from './style';
import Avatar from '../../../../components/shared/Avatar';
import FileInput from '../../../../components/shared/FileInput';

const AvatarField = () => {
  return (
    <AvatarFieldStyled>
      <Avatar />
      <FileInput />
    </AvatarFieldStyled>
  );
};

export default AvatarField;
