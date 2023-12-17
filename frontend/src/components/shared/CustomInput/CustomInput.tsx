import { FC } from 'react';

import { Input, InputError, InputLabel } from './style';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  backgroundColor?: string;
  [x: string]: unknown;
}

const CustomInput: FC<Props> = ({
  value,
  onChange,
  error,
  label,
  backgroundColor,
  ...rest
}) => {
  const inputId = `input-${label}`;

  return (
    <div>
      {!!label && <InputLabel htmlFor={inputId}>{label}</InputLabel>}
      <Input
        id={inputId}
        value={value}
        onChange={onChange}
        error={!!error}
        backgroundColor={backgroundColor}
        {...rest}
      />
      {!!error && <InputError>{error}</InputError>}
    </div>
  );
};

export default CustomInput;
