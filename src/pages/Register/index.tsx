import { Container } from "./styles";

interface RegisterProps {
	userConfigs: any
}

export const Register: React.FC<RegisterProps> = ({ userConfigs }) => {
	return (
		<Container>
			<h1>Register</h1>
			<p>Welcome, {userConfigs.name}!</p>
		</Container>
	);
}