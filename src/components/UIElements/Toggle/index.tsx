import { ChangeEvent, useState } from 'react';
import { StyledLabel, IconContainer } from './styles';
import SunIcon from '../../../assets/images/sun.svg';
import MoonIcon from '../../../assets/images/moon.svg';

type ThemeToggleProps = {
  toggleTheme: () => void;
};

const ToggleSwitch: React.FC<ThemeToggleProps> = ({ toggleTheme }) => { 
  const [switchState, setSwitchState] = useState<boolean>(true);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchState(!switchState);
    toggleTheme();
  }
  return (    
    <StyledLabel htmlFor="checkbox" checked={switchState}> 
      <input 
        id="checkbox" 
        type="checkbox" 
        checked={switchState}
        onChange={handleOnChange}
      />
      <IconContainer checked={switchState}>
        {switchState ? (
          <img src={MoonIcon} alt="Lua" />
        ) : (
          <img src={SunIcon} alt="Sol" />
        )}
      </IconContainer>
    </StyledLabel>
  );
}

export default ToggleSwitch;
