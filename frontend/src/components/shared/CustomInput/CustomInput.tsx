import { FC } from 'react';

import { Input, InputError } from './style';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  [x: string]: unknown;
}

const CustomInput: FC<Props> = ({
  value,
  onChange,
  error,
  ...rest
}) => {
  return (
    <div>
      <Input
        value={value}
        onChange={onChange}
        error={!!error}
        {...rest}
      />
      {!!error && <InputError>{error}</InputError>}
    </div>
  );
};

export default CustomInput;
