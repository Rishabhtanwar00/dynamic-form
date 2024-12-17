// import { useEffect } from 'react';
import FormBulder from './FormBulder';

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
			<FormBulder />
		</div>
	);
}

export default App;
