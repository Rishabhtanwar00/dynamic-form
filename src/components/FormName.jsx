import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../context/FormContext';

const FormName = ({ formId, formName }) => {
	const { forms, setForms } = useContext(FormContext);
	const [newFormName, setNewFormName] = useState('');

	useEffect(() => {
		setNewFormName(formName);
	}, [formName]);

	const updateFormName = () => {
		const updatedForms = forms.map((item) =>
			item.id === formId ? { ...item, name: newFormName } : item
		);
		setForms(updatedForms);
	};

	return (
		<div className='flex items-center gap-5'>
			<input
				id='formlabel'
				type='text'
				className='border-black text-center text-xl font-medium border px-3 py-1  outline-none overflow-hidden text-ellipsis'
				onChange={(e) => setNewFormName(e.target.value)}
				value={newFormName}
			/>
			<button
				className='px-2 py-1 h-fit bg-black text-white text-sm'
				onClick={updateFormName}
			>
				Update
			</button>
		</div>
	);
};

export default FormName;
