import { Container } from "./styles";

interface LoginProps {
	userConfigs: any
}

export const Login: React.FC<LoginProps> = ({ userConfigs }) => {
	return (
		<Container>
			<h1>Login</h1>
			<p>Welcome, {userConfigs.name}!</p>
		</Container>
	);
}