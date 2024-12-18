// import { useEffect } from 'react';
import FormBuilder from './components/FormBuilder';
function App() {
	// useEffect(() => {
	// 	const unloadCallback = (event) => {
	// 		event.preventDefault();
	// 		event.returnValue = '';
	// 		return '';
	// 	};

	// 	window.addEventListener('beforeunload', unloadCallback);
	// 	return () => window.removeEventListener('beforeunload', unloadCallback);
	// }, []);
	return (
		<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
			<FormBuilder />
		</div>
	);
}

export default App;
