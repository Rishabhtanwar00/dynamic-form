import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../context/FormContext';

const LandingPage = () => {
	const { navigate, createNewForm, forms } = useContext(FormContext);

	const [formname, setFormName] = useState('');

	const [newFormId, setNewFormId] = useState(null);

	useEffect(() => {}, [formname]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = createNewForm(formname);
		setNewFormId(id);
	};

	useEffect(() => {
		if (newFormId) {
			navigate(`/create-form/${newFormId}`);
			setNewFormId(null);
		}
	}, [newFormId, navigate]);

	return (
		<div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-10'>
			<h1 className='text-2xl font-medium'>Dynamic Form Builder</h1>
			<form onSubmit={handleSubmit} className='flex gap-5'>
				<input
					type='text'
					className='px-3 py-2 text-sm rounded outline-none border border-black min-w-[250px] tracking-wide'
					placeholder='Enter form Name'
					name='formname'
					onChange={(e) => setFormName(e.target.value)}
					required
				/>
				<input
					type='submit'
					value='Create Form'
					className='px-3 py-2 text-base bg-green-500 text-white rounded cursor-pointer'
				/>
			</form>
		</div>
	);
};

export default LandingPage;
