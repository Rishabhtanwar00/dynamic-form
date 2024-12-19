import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import FormName from './FormName';

const Navbar = ({ formId, formName }) => {
	const { addField, saveForm, setShowPreview } = useContext(FormContext);

	return (
		<div className='w-full flex gap-5 items-center justify-between'>
			<FormName formId={formId} formName={formName} />
			<div className='flex gap-5'>
				<button
					className='h-fit px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
					onClick={() => addField('text')}
				>
					Text
				</button>
				<button
					className='h-fit px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
					onClick={() => addField('email')}
				>
					Email
				</button>
				<button
					className='h-fit px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
					onClick={() => addField('password')}
				>
					Password
				</button>
				<button
					className='h-fit px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
					onClick={() => addField('submit')}
				>
					Button
				</button>
				<button
					className='h-fit px-5 py-2 bg-green-500 text-white active:scale-90 transition-all duration-200 ease-in-out'
					onClick={() => saveForm()}
				>
					Save
				</button>
				<button
					className='h-fit px-5 py-2 bg-red-500 text-white active:scale-90 transition-all duration-200 ease-in-out'
					onClick={() => setShowPreview(true)}
				>
					Preview
				</button>
			</div>
		</div>
	);
};

export default Navbar;
