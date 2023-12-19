import { useRef } from 'react';

import { ButtonVariant } from '../../../types/Button';
import CustomButton from '../CustomButton/CustomButton';

const FileInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    if (!inputRef.current) {
      return;
    }
  
    inputRef.current.click();
  };

  return (
    <div>
      <input ref={inputRef} type="file" style={{ display: 'none' }} />
      <CustomButton
        onClick={handleFileClick}
        variant={ButtonVariant.primary} 
        type="button"
      >
        Choose file
      </CustomButton>
    </div>
  );
};

export default FileInput;
