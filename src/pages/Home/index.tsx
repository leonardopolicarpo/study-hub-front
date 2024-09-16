import { useIntl } from 'react-intl';
import { userConfigs } from '../../models/userConfig';
import { Container } from './styles';

interface HomeProps {
	userConfigs: userConfigs
}

export const Home: React.FC<HomeProps> = ({ userConfigs }) => {
	const intl = useIntl();
	console.log('to aqui', userConfigs);
	return (
		<Container>
			<h1>Home</h1>
			<p>{intl.formatMessage({ id: 'home.Bem-vindo' })}, {userConfigs.language}!</p>
		</Container>
	);
}