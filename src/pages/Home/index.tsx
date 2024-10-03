import { useState } from 'react';
import { useIntl } from 'react-intl';
import { userConfigs } from '../../models/userConfig';
import { Container, FloatingBox } from './styles';
import { Modal, Button } from '@mui/material';
import ToggleSwitch from '../../components/UIElements/Toggle';

interface HomeProps {
	userConfigs: userConfigs;
	toggleTheme: () => void;
	updateLanguage: (language: string) => void;
}

export const Home: React.FC<HomeProps> = ({ userConfigs, toggleTheme, updateLanguage }) => {
	const intl = useIntl();
	const [open, setOpen] = useState<boolean>(true);

	const handleLanguageChange = (language: string) => {
    updateLanguage(language);
  };

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container>
			<h1>Home</h1>
			<p>{intl.formatMessage({ id: 'home.Bem-vindo' })}, {userConfigs.language}!</p>


			<Modal open={open} onClose={handleClose}>
        <FloatingBox>
          <h2>{intl.formatMessage({ id: 'home.Selecione o Idioma e o Tema' })}</h2>
          <div>
            <Button onClick={() => handleLanguageChange('PT')}>PT</Button>
            <Button onClick={() => handleLanguageChange('EN')}>EN</Button>
            <Button onClick={() => handleLanguageChange('ES')}>ES</Button>
          </div>
					<div>
						<ToggleSwitch toggleTheme={toggleTheme} />
					</div>

          <Button onClick={handleClose}>{intl.formatMessage({ id: 'home.Aplicar' })}</Button>
        </FloatingBox>
      </Modal>
		</Container>
	);
}