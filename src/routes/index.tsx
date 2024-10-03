import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userConfigs } from '../models/userConfig';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

interface Props {
	userConfigs: userConfigs;
	toggleTheme: () => void;
	updateLanguage: (language: string) => void;
}

const AppRoutes = ({ userConfigs, toggleTheme, updateLanguage }: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home userConfigs={userConfigs} toggleTheme={toggleTheme} updateLanguage={updateLanguage} />} />
				<Route path='/login' element={<Login userConfigs={userConfigs} />} />
				<Route path='/register' element={<Register userConfigs={userConfigs} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;