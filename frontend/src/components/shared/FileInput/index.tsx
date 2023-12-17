import { useRef } from 'react';

import { ButtonVariant } from '../../../types/Button';
import CustomButton from '../CustomButton/CustomButton';

const FileInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const chooseFileHandler = () => {
    if (!inputRef.current) {
      return;
    }
  
    inputRef.current.click();
  };

  return (
    <div>
      <input ref={inputRef} type="file" style={{ display: 'none' }} />
      <CustomButton 
        onClick={chooseFileHandler} 
        variant={ButtonVariant.primary} 
        type="button"
      >
        Choose file
      </CustomButton>
    </div>
  );
};

export default FileInput;
