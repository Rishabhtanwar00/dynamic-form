import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import FormContextProvider from './context/FormContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<FormContextProvider>
			<App />
		</FormContextProvider>
	</StrictMode>
);
