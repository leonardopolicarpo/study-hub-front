import styled from 'styled-components';
import { Colors as DesignSystem } from '../../../assets/styles/StyleTypes';

export const StyledLabel = styled.label<{ checked: boolean }>`  
  cursor: pointer;  
  text-indent: -9999px;  
  width: 80px;  
  height: 40px;  
  background: ${({ checked }) => (checked ? DesignSystem.BLACK :  DesignSystem.GREY_DARK)};  
  display: block;  
  border-radius: 20px;  
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "10px" : "calc(55% - 5px)")};
    top: 5px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export const IconContainer = styled.div<{ checked: boolean }>`
  position: absolute;
  z-index: 1;
  top: 7px;
  left: ${({ checked }) => (checked ? "12px" : "calc(55% - 3px)")};
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ checked }) => (checked ? '#F1C40F' : '#F39C12')}; // Ajuste de cor dos ícones
  }
`;