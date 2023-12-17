import styled from 'styled-components';

export const AuthForm = styled.form`
  width: 430px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
  background-color: #464852;
`;

export const AuthTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: #ced4da;
`;

export const Dash = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #ced4da;
`;

export const AuthPrompt = styled.p`
  margin: 0;
  font-size: 14px;
  color: #ced4da;

  a {
    color: #ced4da;
    text-decoration: none;
    font-weight: bold;
  }
`;