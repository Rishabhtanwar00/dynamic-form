import { Route, Routes } from 'react-router-dom';
import FormBuilder from './components/FormBuilder';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<div className=''>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/create-form/:formId' element={<FormBuilder />} />
			</Routes>
		</div>
	);
}

export default App;
