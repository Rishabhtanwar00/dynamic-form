import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../context/FormContext';

const FormTitle = ({ formId, formTitle }) => {
	const { forms, setForms } = useContext(FormContext);
	const [newFormTitle, setNewFormTitle] = useState('');

	useEffect(() => {
		setNewFormTitle(formTitle);
	}, [formTitle]);

	const updateFormTitle = () => {
		const updatedForms = forms.map((item) =>
			item.id === formId ? { ...item, title: newFormTitle } : item
		);
		setForms(updatedForms);
	};

	return (
		<div className='flex items-center gap-5 pb-10'>
			<input
				id='formlabel'
				type='text'
				className='border-black text-center text-xl font-medium border px-3 py-1  outline-none overflow-hidden text-ellipsis'
				onChange={(e) => setNewFormTitle(e.target.value)}
				value={newFormTitle}
			/>
			<button
				className='px-2 py-1 h-fit bg-black text-white text-sm'
				onClick={updateFormTitle}
			>
				Update
			</button>
		</div>
	);
};

export default FormTitle;
