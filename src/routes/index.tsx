import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userConfigs } from '../models/userConfig';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

interface Props {
	userConfigs: userConfigs
}

const AppRoutes = ({ userConfigs }: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home userConfigs={userConfigs} />} />
				<Route path='/login' element={<Login userConfigs={userConfigs} />} />
				<Route path='/register' element={<Register userConfigs={userConfigs} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;