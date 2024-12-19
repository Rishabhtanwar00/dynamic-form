import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import FormContextProvider from './context/FormContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<FormContextProvider>
				<App />
			</FormContextProvider>
		</BrowserRouter>
	</StrictMode>
);
