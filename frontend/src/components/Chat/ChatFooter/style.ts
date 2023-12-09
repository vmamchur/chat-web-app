import styled from 'styled-components';

export const Root = styled.footer`
  width: 100%;
  padding-top: 20px;
  border-top: 2px solid #32343e;
`;

export const ChatFooterForm = styled.form`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #464852;
  border-radius: 6px;
`;

export const ChatFooterFormInput = styled.textarea`
  height: 40px;
  width: 100%;
  padding: 12px 10px;
  border: none;
  background-color: inherit;
  color: #fff;
  resize: none;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;

export const ChatFooterFormSubmit = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: #3db16b;
  cursor: pointer;
`;