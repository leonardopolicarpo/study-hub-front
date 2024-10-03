import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FloatingBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.text};

  button {
    color: black;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;